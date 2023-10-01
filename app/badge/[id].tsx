import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { useHeroeData } from "../../stores/heroData/heroeData";
import { useEffect } from "react";

const badge = () => {
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") {
    return null;
  }

  const { heroe, fetchHeroe } = useHeroeData();

  useEffect(() => {
    fetchHeroe(parseInt(id));
  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Heroe badge"
          titleStyle={{ fontWeight: "bold" }}
        />
      </Appbar.Header>
      <Text>{heroe?.name}</Text>
    </View>
  );
};

export default badge;
