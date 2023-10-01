import { View, Image, Dimensions, StyleSheet } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import { router } from "expo-router";
import { useHeroesData } from "../stores/heroesData";
import { useEffect } from "react";

const heroes = () => {
  const handleShowHeroeBadge = (id: number) => {
    router.push(`/badge/${id}`);
  };

  const { heroes, fetchHeroes } = useHeroesData();

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Heroes" titleStyle={{ fontWeight: "bold" }} />
      </Appbar.Header>
      {heroes.map((item, index) => (
        <Card
          key={`${item.name}-${index}`}
          onPress={() => handleShowHeroeBadge(item.id)}
        >
          <Card.Content>
            <Text variant="titleLarge">{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.id}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: 200,
  },
});

export default heroes;
