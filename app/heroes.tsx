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
        <Appbar.Content
          title="Tour badges"
          titleStyle={{ fontWeight: "bold" }}
        />
      </Appbar.Header>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 30,
            color: "#7E494A",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Complete tours, collect badges and earn discounts to local places!
        </Text>
        {heroes.map((item, index) => (
          <Card
            style={{ position: "relative", height: 152 }}
            key={`${item.name}-${index}`}
            onPress={() => handleShowHeroeBadge(item.id)}
          >
            <Text>{item.id}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Card.Content style={{ marginLeft: 120 }}>
              <Text
                variant="titleLarge"
                style={{ color: "#7E494A", fontWeight: "500", marginTop: 20 }}
              >
                {item.name}'s Badge
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 140,
    position: "absolute",
    top: 6,
    left: 10,
  },
});

export default heroes;
