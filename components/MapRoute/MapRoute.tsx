import { FC, useEffect, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { MapRouteProps } from "./types";
import * as Location from "expo-location";
import { Coord } from "../../stores/types";
import { Marker } from "react-native-maps";
import { Image, Text, View } from "react-native";

const MapRoute: FC<MapRouteProps> = ({
  coordinates,
  initLocation,
  imageURL,
}) => {
  const [location, setLocation] = useState<Coord | null>(initLocation);

  useEffect(() => {
    const fetchLocation = async () => {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    };
    const interval = setInterval(async () => {
      fetchLocation();
    }, 30000);
    fetchLocation();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <MapViewDirections
        apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_TOKEN || ""}
        origin={location || coordinates[0]}
        destination={coordinates[coordinates.length - 1]}
        strokeWidth={4}
        mode="WALKING"
        strokeColor="#7E494A"
        waypoints={coordinates.slice(0, -1)}
      />
      {location ? (
        <Marker coordinate={location}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              width: 48,
              backgroundColor: "#FFFFFF",
              borderRadius: 2137,
              borderColor: "#7E484A",
              borderWidth: 2,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: imageURL }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </Marker>
      ) : null}
    </>
  );
};

export default MapRoute;
