import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AnimatedBottomBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tabs}>Wawel Royal Castle</Text>
            <Text style={styles.tabs}>Fortified residence which was..</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        height: "35%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F8F8F8",
        width: "100%",
        height: "100%",
    },
});

export default AnimatedBottomBar;
