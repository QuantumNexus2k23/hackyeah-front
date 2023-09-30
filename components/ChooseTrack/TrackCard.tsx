import { TrackType } from "./type";
import { Button, Card, Text } from "react-native-paper";

const TrackCard = ({ name, image_url, details, hero }: TrackType) => {
  const cardDetails = Object.keys(details) as Array<keyof TrackType["details"]>;

  return (
    <Card mode="elevated" style={{ marginVertical: 10 }}>
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        {cardDetails.map((detail) => (
          <Text variant="bodyMedium">{details[detail]}</Text>
        ))}
      </Card.Content>
      <Card.Cover source={{ uri: image_url }} />
    </Card>
  );
};

export default TrackCard;
