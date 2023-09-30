import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const AnimatedBottomBar = () => {
    const handleViewDetails = (id: number) => {
        router.push(`/details/${id}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.waypointNumber}>
                <View style={styles.row}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        Wawel Royal Castle
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={{ fontSize: 16 }}>
                        Fortified residence which was..
                    </Text>
                </View>
            </View>
            <Button
                style={styles.pointButton}
                onPress={() => handleViewDetails(1)}
            >
                <Text style={styles.pointText}>1</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        height: "35%",
        padding: 10,
    },
    row: {
        flexDirection: "row",
        paddingBottom: 10,
    },
    waypointNumber: {
        flexDirection: "column",
    },
    pointButton: {
        justifyContent: "center",
        borderRadius: 50,
        borderColor: "#7E484A",
        borderWidth: 3,
        width: 60,
        height: 60,
        marginRight: 10,
    },
    pointText: {
        paddingTop: 6,
        fontSize: 24,
        fontWeight: "bold",
        color: "#7E484A",
    },
});

export default AnimatedBottomBar;
