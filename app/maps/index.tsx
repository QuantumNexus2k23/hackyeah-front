import { FC } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

const Maps: FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ width: "100%", height: "100%" }} />
    </View>
  );
};

export default Maps;
