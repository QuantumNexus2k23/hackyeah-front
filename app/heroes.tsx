import { View } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import { router } from "expo-router";

const heroes = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Heroes" titleStyle={{ fontWeight: "bold" }} />
      </Appbar.Header>
      <Card>
        <Card.Title title="Card Title" />
        <Card.Content>
          <Text variant="titleLarge">Card subtitle</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default heroes;
