import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouteDetailsData } from "../../stores/routeDetailsData";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";
import { visitMapPoint } from "../../stores/routeDetailsData/visitMapPoint";

const details = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") {
    return null;
  }

  const { routeDetails, fetchRouteDetails } = useRouteDetailsData();

  useEffect(() => {
    fetchRouteDetails(id);
  }, []);

  const handleOnPress = () => {
    router.back();
  };

  const handleNextPlace = useCallback(async () => {
    console.log({ route: routeDetails?.route, id: routeDetails?.id });
    await visitMapPoint(routeDetails?.route, routeDetails?.id);
    router.back();
  }, [routeDetails]);

  return (
    <View style={{ paddingBottom: insets.bottom }}>
      <CustomAppbar
        title={routeDetails?.name || "Map point"}
        onGoBack={handleOnPress}
      />
      <ScrollView style={{ height: "80%" }}>
        {routeDetails?.paragraphs.map((item) => (
          <View key={item.id}>
            <Text style={styles.textParagraph}>{item.text}</Text>
            {item.image && (
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
            <Text style={styles.imageDescription}>
              {item.image_description}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Button style={styles.nextPlaceButton} onPress={handleNextPlace}>
        <Text style={styles.buttonText}>Next place</Text>
      </Button>
    </View>
  );
};

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: 200,
  },
  nextPlaceButton: {
    backgroundColor: "#7E494A",
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  textParagraph: {
    padding: 10,
    fontSize: 16,
  },
  shortDescription: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  imageDescription: {
    padding: 4,
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default details;
