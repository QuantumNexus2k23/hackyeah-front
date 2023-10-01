import { View } from "react-native";

import Place from "../../assets/svg/place.svg";
import History from "../../assets/svg/history.svg";
import Timelapse from "../../assets/svg/timelapse.svg";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useMapData } from "../../stores/mapData";
import { Button, Text } from "react-native-paper";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";

const chooseTrack = () => {
  const { id } = useLocalSearchParams();
  const { route, fetchMapData } = useMapData();
  useEffect(() => {
    fetchMapData(id as string);
  }, []);

  const redirectToMap = () => router.push(`maps/${id}`);

  return route ? (
    <View
      style={{
        paddingHorizontal: 15,
      }}
    >
      <CustomAppbar title={route.name} onGoBack={() => router.back()} />
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
      <Text style={{ paddingTop: 20, fontSize: 20 }}>{route.description}</Text>
      <Button onPress={redirectToMap}>Start the tour</Button>
    </View>
  ) : null;
};

export default chooseTrack;
