import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigation from "./BottomTabNavigation.jsx";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const name = "piston";
const drawerLabelProp = "Piston Tets";
const titleProp = "Piston Maycom";

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          paddingTop: 50,
          width: 250,
        },
      }}
    >
      <Drawer.Screen
        name={name}
        options={{
          drawerLabel: drawerLabelProp,
          title: titleProp,
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialCommunityIcons name="piston" size={24} color="black" />
          ),
        }}
        component={BottomTabNavigation}
        initialParams={{name,drawerLabelProp}}
        />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
