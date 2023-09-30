import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Hero } from "../../stores/types";

export type AnimatedBottomBarProps = {
  title?: string;
  description?: string;
  hero?: Hero;
  pointNumber: number;
};

const AnimatedBottomBar = ({
  title,
  description,
  hero,
  pointNumber,
}: AnimatedBottomBarProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleViewDetails = () => {
    router.push("/details");
  };
  const [isExpanded, setExpanded] = useState(false);

  const snapPoints = useMemo(() => ["15%", "50%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef.current]);

  const handlePresentModalPress = useCallback(() => {
    if (isExpanded) {
      bottomSheetModalRef.current?.collapse();
      setExpanded(false);
    } else {
      bottomSheetModalRef.current?.expand();
      setExpanded(true);
    }
  }, [isExpanded]);
  const handleSheetChanges = useCallback((index: number) => {
    setExpanded(!!index);
  }, []);

  if (title == null || description == null) {
    return null;
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.modal}
      enablePanDownToClose={false}
    >
      <Pressable onPress={handlePresentModalPress}>
        <View style={styles.container}>
          <View style={styles.waypointNumber}>
            <View style={styles.row}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
            </View>
            <View style={styles.row}>
              <Text
                numberOfLines={isExpanded ? undefined : 1}
                style={styles.description}
              >
                {description} {description} {description} {description}
              </Text>
            </View>
          </View>
          <View style={styles.pointButton}>
            <Text style={styles.pointText}>{pointNumber}</Text>
          </View>
        </View>
        <View>
          {hero ? (
            <Image
              style={{
                borderRadius: 0,
                zIndex: 100,
                height: 330,
                width: 330,
                resizeMode: "contain",
                position: "absolute",
                bottom: -11,
                right: -60,
              }}
              source={{ uri: hero.image }}
            />
          ) : null}
          <Button
            labelStyle={styles.buttonLabel}
            style={[styles.button, { marginTop: isExpanded ? 0 : 64 }]}
            onPress={handleViewDetails}
          >
            I am here!
          </Button>
        </View>
      </Pressable>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  waypointNumber: {
    flexDirection: "column",
  },
  pointButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "#7E484A",
    borderWidth: 3,
    width: 60,
    height: 60,
  },
  pointText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7E484A",
  },
  description: {
    fontSize: 16,
    maxWidth: 272,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#7E484A",
    padding: 4,
  },
  buttonLabel: {
    color: "white",
  },
});

export default AnimatedBottomBar;
