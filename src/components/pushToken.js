import { Platform } from 'react-native';
import fetchData from './src/services/fetchService.js';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

// Configurar el manejador de notificaciones
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default async function pushToken() {
  let expoPushToken = null;

  // Configurar el canal de notificaciones para Android
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  // Verificar si el dispositivo es físico
  if (Device.isDevice) {
    // Obtener permisos de notificación
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    // Solicitar permisos si no se han concedido
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    // Mostrar alerta si no se conceden los permisos
    if (finalStatus !== 'granted') {
      alert('¡No se pudo obtener el token para notificaciones push!');
      return;
    }

    try {
      // Obtener el ID del proyecto desde la configuración de Expo
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('ID de proyecto no encontrado');
      }

      // Obtener el token de Expo para notificaciones push
      expoPushToken = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
    } catch (e) {
      expoPushToken = `${e}`;
    }
  } else {
    alert('Debe usar un dispositivo físico para notificaciones push');
    return;
  }

  // Enviar el token al servidor
  await fetchData("/data/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: expoPushToken }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return expoPushToken;
}
