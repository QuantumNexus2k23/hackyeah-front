import { Image, View } from "react-native";

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
    <View>
      <CustomAppbar title={route.name} onGoBack={() => router.back()} />
      <View style={{ position: "relative", height: "78%" }}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: route.image }}
        />
        <Image
          style={{
            width: 120,
            height: 210,
            right: 7,
            top: 20,
            transform: [{ scaleX: -1 }],
            position: "absolute",
          }}
          source={{ uri: route.hero.image }}
        />
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text
            variant="titleLarge"
            style={{ color: "#4F2022", marginBottom: 4, fontWeight: "500" }}
          >
            {route.name}
          </Text>
          <View style={{ paddingLeft: 5, marginBottom: 18 }}>
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

          {route.description.split("\\n\\n").map((text) => (
            <Text key={text} style={{ marginVertical: 6, fontSize: 16 }}>
              {text}
            </Text>
          ))}
        </View>
      </View>
      <Button
        onPress={redirectToMap}
        style={{
          backgroundColor: "#7E494A",
          borderRadius: 10,
          paddingVertical: 3,
          alignSelf: "center",
        }}
        labelStyle={{
          color: "white",
          width: "80%",
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Start the tour
      </Button>
    </View>
  ) : null;
};

export default chooseTrack;
