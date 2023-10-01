import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Place from "../../assets/svg/place.svg";
import History from "../../assets/svg/history.svg";
import Timelapse from "../../assets/svg/timelapse.svg";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useMapData } from "../../stores/mapData";
import { Text } from "react-native-paper";

const chooseTrack = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const { route, fetchMapData } = useMapData();
  useEffect(() => {
    fetchMapData(id as string);
  }, []);

  return route ? (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: 15,
      }}
    >
      <Text variant="titleLarge" style={{ color: "#4F2022", marginBottom: 4 }}>
        {route.name}
      </Text>
      <View style={{ paddingLeft: 5 }}>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <History />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {route.route_type}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Timelapse />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {new Date(
              new Date().toISOString().split("T")[0] + "T" + route.duration
            ).getHours()}
            h
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Place />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {route.starting_point_title}
          </Text>
        </View>
      </View>
      <Text style={{ paddingTop: 20 }}>{route.description}</Text>
    </View>
  ) : null;
};

export default chooseTrack;
