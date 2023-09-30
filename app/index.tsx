import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const map = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>eowoieqfhuefq q9ehfuoqehf qefh0qehfhn map</Text>
    </View>
  );
};

export default map;
