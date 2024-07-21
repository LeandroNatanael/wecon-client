import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import CdgrComponent from "../components/CdgrComponent";
import { CDGRProvider } from "../contexts/CDGRContext";

const Tab = createBottomTabNavigator();


function Test() {
  const route = useRoute();
  const {name,drawerLabelProp} = route.params || {};
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
      <Text>{drawerLabelProp}</Text>
    </View>
  );
}

const BottomTabNavigation = () => {
  const route = useRoute();
  const { name, drawerLabelProp } = route.params || {};

  return (
    <CDGRProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: Platform.OS === "android" ? 70 : 60,
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Alarm"
          component={CdgrComponent}
          options={{
            tabBarIcon: () => {
              return <Entypo name="bell" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Monitor"
          component={CdgrComponent}
          options={{
            tabBarIcon: () => {
              return <MaterialIcons name="monitor" size={24} color="black" />;
            },
          }}
        />
          <Tab.Screen
            name="DrawerHome"
            component={Test}
            initialParams={{name,drawerLabelProp}}
            options={{
              tabBarIcon: () => {
                return <Entypo name="menu" size={36} color="black" />;
              },
            }}
          />
      </Tab.Navigator>
    </CDGRProvider>
    );
};

export default BottomTabNavigation;
