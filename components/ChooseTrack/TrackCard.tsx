import { TrackType } from "./type";
import { Card, Text } from "react-native-paper";
import Place from "./static/place.svg";
import History from "./static/history.svg";
import Timelapse from "./static/timelapse.svg";
import { View } from "react-native";

const TrackCard = ({ name, image_url, details, hero }: TrackType) => {
  return (
    <Card
      style={{
        marginVertical: 10,
        borderRadius: 0,
        backgroundColor: "#FBF8F8",
      }}
    >
      <Card.Content style={{ marginBottom: 5 }}>
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
            {details.route_type}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Timelapse />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {Math.round(details.duration * 2) / 2}h
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Place />
          <Text
            style={{ marginLeft: 3, color: "#3B3B3B" }}
            variant="bodyMedium"
          >
            {details.route_type}
          </Text>
        </View>
      </Card.Content>
      <Card.Cover style={{ borderRadius: 0 }} source={{ uri: image_url }} />
    </Card>
  );
};

export default TrackCard;
