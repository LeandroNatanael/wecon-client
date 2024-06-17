import { View, FlatList } from "react-native";
import { useState } from "react";
import SetParameterCDGR from "./SetParameterCDGR.jsx";
import RenderItem from "./RenderItem.jsx";
import styles from "../../styles/Styles.jsx";

const RenderBoxes = ({ dataBoxes }) => {
  const [selectedData, setSelectedData] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 

  const handlePress = (item) => {
    setSelectedData(item);
    setModalVisible(true);
  }; 

  return (
    <View>
      <FlatList
        data={dataBoxes}
        renderItem={({ item }) => (
          <RenderItem item={item} handlePress={handlePress} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      {/* <SetParameterCDGR
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={selectedData}
      />*/}
    </View> 
  );
};

export default RenderBoxes;
