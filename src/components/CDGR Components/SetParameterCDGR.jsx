import { View, Text, TextInput, Button, Modal } from "react-native";
import { useState } from "react";
import styles from "../../styles/Styles.jsx";

const SetParameterCDGR = ({ visible, onClose, data }) => {
  const [parameter, setParameter] = useState(data?.sensor?.value || "");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            Setear parametros de {data?.sensor?.name}
          </Text>
          <TextInput
            style={styles.input}
            value={parameter}
            onChangeText={setParameter}
          />
          <View styles={styles.modalButtons}>
          <Button title="Save" onPress={onClose} />
          <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SetParameterCDGR;
