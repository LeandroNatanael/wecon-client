import { CDGRContext } from "../../contexts/CDGRContext.jsx";
import { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import RenderBoxes from "../../components/CDGR Components/RenderBoxes.jsx";
import styles from "../../styles/Styles.jsx";

const HookCDGR = () => {
  const { data, error, loading } = useContext(CDGRContext);

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
