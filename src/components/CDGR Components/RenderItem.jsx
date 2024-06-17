import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/Styles.jsx";

const RenderItem = ({ item, handlePress }) => (
  <TouchableOpacity onPress={() => handlePress(item)}>
    <View style={styles.dataBox}>
      <Text style={styles.boxName}>{item.sensor.name}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.boxValue}>{item.sensor.value} ppm</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RenderItem;
