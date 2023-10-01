import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function Root() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Slot />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
