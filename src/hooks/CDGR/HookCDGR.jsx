import { CDGRContext } from "../../contexts/CDGRContext.jsx";
import { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import RenderBoxes from "../../components/RenderBoxes.jsx";
import styles from "../../styles/StylesMain.jsx";

const HookCDGR = () => {
  const { data, error, loading } = useContext(CDGRContext);


    //A futuro crear .jsx dedicados a load y error
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#fff"
          testID="loading-indicator"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RenderBoxes dataBoxes={data} />
    </View>
  );
};

export default HookCDGR;
