import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets = useSafeAreaInsets();

  const handleOnPress = () => {
    router.push("/choose-track/1");
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
    >
      <Button mode="contained" onPress={handleOnPress}>
        Select Krakow tracks
      </Button>
    </View>
  );
};

export default index;
