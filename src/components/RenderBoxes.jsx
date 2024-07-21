import { View, FlatList } from "react-native";
import RenderItem from "./RenderItem.jsx";
import styles from "../styles/StylesMain.jsx";

const RenderBoxes = ({ dataBoxes }) => {


  return (
    <View>
      <FlatList
        data={dataBoxes}
        renderItem={({ item }) => (
          <RenderItem item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View> 
  );
};

export default RenderBoxes;
