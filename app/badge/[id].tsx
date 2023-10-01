import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { Appbar, Button, Card } from "react-native-paper";
import Place from "../../assets/svg/place.svg";
import History from "../../assets/svg/history.svg";
import Timelapse from "../../assets/svg/timelapse.svg";

import {
  useHeroeBadgesData,
  useHeroeData,
} from "../../stores/heroData/heroeData";
import { useEffect } from "react";

const badge = () => {
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") {
    return null;
  }

  const { heroe, fetchHeroe } = useHeroeData();
  const { routes, fetchRoutes } = useHeroeBadgesData();

  useEffect(() => {
    fetchHeroe(parseInt(id));
    fetchRoutes(id);
  }, []);
  const redirectToMap = (id: number) => router.push(`maps/${id}`);
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Tour badges"
          titleStyle={{ fontWeight: "bold" }}
        />
      </Appbar.Header>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        {heroe?.image && (
          <Image
            style={{ width: 120, height: 200 }}
            source={{ uri: heroe.image }}
          />
        )}
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        {heroe?.name}'s Badge
      </Text>
      {routes?.map((item) => (
        <Card style={{ paddingLeft: 10, paddingVertical: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#3B3B3B",
              marginBottom: 8,
            }}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <History />
            <Text style={{ marginLeft: 3, color: "#3B3B3B" }}>
              {item.route_type}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 3 }}>
            <Timelapse />
            <Text style={{ marginLeft: 3, color: "#3B3B3B" }}>
              {item.duration}h
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 3 }}>
            <Place />
            <Text style={{ marginLeft: 3, color: "#3B3B3B" }}>
              {item.starting_point_title}
            </Text>
          </View>
          <Button onPress={() => redirectToMap(item.id)}>
            {item.visited_by_user ? "Completed" : "Go on a tour"}
          </Button>
        </Card>
      ))}
    </View>
  );
};

export default badge;
