import { useContext, useEffect } from "react";
import { CDGRContext } from "../../contexts/CDGRContext.jsx";
import HookCDGR from "../../hooks/CDGR/HookCDGR.jsx";
import { View, Text } from "react-native";
import styles from "../../styles/Styles.jsx";
import NavBar from "../NavBar.jsx";
const CdgrComponent = () => {
  const { refreshData } = useContext(CDGRContext);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 10000);

    return () => clearInterval(interval);
  }, [refreshData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central NH3 "Proyectos del Mar"</Text>
      <HookCDGR />
      <NavBar />
    </View>
  );
};

export default CdgrComponent;
