import { useState } from "react";

import { CitiesType } from "../../stores/types";
import { router } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

const ChooseCity = ({ cities }: { cities: CitiesType[] }) => {
  const [chosenCity, setChosenCity] = useState<null | number>(null);

  const handleOnPress = (id: number) => {
    router.push(`/choose-track/${id}`);
  };
  return (
    <>
      <View
        style={{ flexDirection: "column", alignItems: "center", height: "90%" }}
      >
        <Image
          style={{ width: 300, height: 140, marginTop: 20 }}
          source={require("./assets/logo.png")}
        />
        <Text
          style={{
            fontWeight: "500",
            fontSize: 30,
            color: "#4F2022",
            marginBottom: 30,
          }}
        >
          I am in:
        </Text>
        <FlatList
          data={cities}
          style={{ width: "100%", marginBottom: 20 }}
          renderItem={({ item }) => (
            <Button
              mode={item.id === chosenCity ? "contained" : "outlined"}
              labelStyle={{ fontSize: 18 }}
              key={`${item.name}${item.id}`}
              buttonColor={item.id === chosenCity ? "#7E494A" : "#FBF8F8"}
              textColor={item.id === chosenCity ? "#FBF8F8" : "#7E494A"}
              style={{
                marginHorizontal: 10,
                marginVertical: 6,
                paddingVertical: 3,
                borderColor: "#7E494A",
              }}
              onPress={() => setChosenCity(item.id)}
            >
              {item.name}
            </Button>
          )}
        />
      </View>
      <Button
        mode="contained-tonal"
        buttonColor={chosenCity ? "#7E494A" : "#7E494A80"}
        textColor="#FBF8F8"
        labelStyle={{ fontSize: 18 }}
        style={{
          width: "95%",
          borderRadius: 10,
          paddingVertical: 3,
          alignSelf: "center",
        }}
        onPress={() => {
          if (chosenCity) handleOnPress(chosenCity);
        }}
      >
        Let's go
      </Button>
    </>
  );
};

export default ChooseCity;
