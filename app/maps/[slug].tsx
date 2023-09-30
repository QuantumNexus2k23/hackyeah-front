import { FC } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Coord } from "../../stores/mapData/types";
import getRegionFromCoordinates from "../../utils/coordinates";

// Mock data
const markers: Array<{ coordinate: Coord }> = [
  {
    coordinate: {
      latitude: 50.06,
      longitude: 19.94,
    },
  },
  {
    coordinate: {
      latitude: 50.073,
      longitude: 19.9422,
    },
  },
  {
    coordinate: {
      latitude: 50.01,
      longitude: 20.01,
    },
  },
  {
    coordinate: {
      latitude: 50.04,
      longitude: 19.97,
    },
  },
  {
    coordinate: {
      latitude: 50.062,
      longitude: 19.94333,
    },
  },
];

const Maps: FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={getRegionFromCoordinates(
          markers.map(({ coordinate }) => coordinate)
        )}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={() => console.log("Hello")}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Maps;
