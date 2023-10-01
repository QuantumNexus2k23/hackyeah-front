import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Hero } from "../../stores/types";

type Props = {
  hero?: Hero;
};

const FinishedRouteBottomBar = ({ hero }: Props) => {
  const insets = useSafeAreaInsets();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef.current]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["40%"]}
      style={[styles.modal, { paddingBottom: insets.bottom }]}
      enablePanDownToClose={false}
    >
      <Text style={styles.title}>Your journey is complete!</Text>
      <Text style={styles.description}>
        You now completed The Old Town Tour and get to know Atena little more.
        Do you want to learn the full story?
      </Text>
      {hero && (
        <Image
          style={{
            borderRadius: 0,
            zIndex: 100,
            height: 240,
            width: 240,
            resizeMode: "contain",
            position: "absolute",
            bottom: 72,
            right: -56,
          }}
          source={{ uri: hero.image }}
        />
      )}
      <Button
        labelStyle={styles.buttonLabel}
        style={styles.button}
        onPress={() => console.log("Well done! Link will be delivered soon!")}
      >
        Download full story
      </Button>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginTop: 12,
    maxWidth: 272,
    fontSize: 16,
    fontWeight: "normal",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#7E484A",
    padding: 4,
    position: "absolute",
    width: "100%",
    bottom: 36,
  },
  buttonLabel: {
    color: "white",
  },
});

export default FinishedRouteBottomBar;
