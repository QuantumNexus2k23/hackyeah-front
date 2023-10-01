import { router } from "expo-router";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

const badge = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Heroe badge"
          titleStyle={{ fontWeight: "bold" }}
        />
      </Appbar.Header>
      <Text>Heroe badge</Text>
    </View>
  );
};

export default badge;
