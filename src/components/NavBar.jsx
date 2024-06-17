import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "../styles/Styles";

const NavBar = () => {

    return(
    <View style={styles.navBarContainer}>
     <Entypo name="menu" size={36} color="black" />
    </View>
    )
};

export default NavBar;
