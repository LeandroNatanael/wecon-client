import { useContext, useEffect } from "react";
import { CDGRContext } from "../contexts/CDGRContext.jsx";
import HookCDGR from "../hooks/CDGR/HookCDGR.jsx";
import { View} from "react-native";
import styles from "../styles/StylesMain.jsx";


const CdgrComponent = () => {
  //Actualiza las variables usando useContext
  const { refreshData } = useContext(CDGRContext);
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 10000);

    return () => clearInterval(interval);
  }, [refreshData]);

  return (
    <View style={styles.component}>
      <HookCDGR />
    </View>
  );
};

export default CdgrComponent;
