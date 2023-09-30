import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Map = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>{`Map ${slug}`}</Text>
    </View>
  );
};

export default Map;
