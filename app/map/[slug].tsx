import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoutesMap from "../../components/RoutesMap/RoutesMap";

const map = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Placeholder for map</Text>
      <RoutesMap />
    </View>
  );
};

export default map;
