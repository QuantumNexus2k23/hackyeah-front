import { FC } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import MapWrapper from "../../components/MapWrapper/MapWrapper";

const Maps: FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapWrapper>
        <MapView style={{ width: "100%", height: "100%" }} />
      </MapWrapper>
    </View>
  );
};

export default Maps;
