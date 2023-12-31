import { Card, Text } from "react-native-paper";
import Place from "../../assets/svg/place.svg";
import History from "../../assets/svg/history.svg";
import Timelapse from "../../assets/svg/timelapse.svg";
import { Image, View } from "react-native";
import { TrackType } from "../../stores/types";

const TrackCard = ({
  name,
  image,
  hero,
  route_type,
  duration,
  starting_point_title,
}: TrackType) => {
  const time = new Date(
    new Date().toISOString().split("T")[0] + "T" + duration
  ).getHours();

  return (
    <Card
      style={{
        backgroundColor: "#FBF8F8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Card.Cover style={{ borderRadius: 0 }} source={{ uri: image }} />
      <Card.Content style={{ marginVertical: 5 }}>
        <Text
          variant="titleLarge"
          style={{ color: "#4F2022", marginBottom: 4 }}
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <History />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {route_type}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Timelapse />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {time}h
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Place />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {starting_point_title}
          </Text>
        </View>
      </Card.Content>
      {hero ? (
        <Image
          style={{
            borderRadius: 0,
            zIndex: 100,
            height: 280,
            width: 280,
            resizeMode: "contain",
            position: "absolute",
            bottom: -11,
            right: -60,
            transform: [{ scaleX: -1 }],
          }}
          source={{ uri: hero.image }}
        />
      ) : null}
    </Card>
  );
};

export default TrackCard;
