import styles from "../styles/StylesMain";
import { Text, View, TouchableOpacity } from "react-native";

const RenderItem = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.dataBox}>
      <Text style={styles.boxName}>{item.sensor.name}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.boxValue}>{item.sensor.value} ppm</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RenderItem;
