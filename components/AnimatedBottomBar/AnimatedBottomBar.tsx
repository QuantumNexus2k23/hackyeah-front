import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export type AnimatedBottomBarProps = {
  title?: string;
  description?: string;
  pointNumber: number;
};

const AnimatedBottomBar = ({
  title,
  description,
  pointNumber,
}: AnimatedBottomBarProps) => {
  const handleViewDetails = () => {
    router.push("/details");
  };

  if (!title || !description) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.waypointNumber}>
        <View style={styles.row}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{ fontSize: 16 }}>{description}</Text>
        </View>
      </View>
      <Button style={styles.pointButton} onPress={handleViewDetails}>
        <Text style={styles.pointText}>{pointNumber}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingVertical: 36,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
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
