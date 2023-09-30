import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";
import { useRouteDetailsData } from "../../stores/routeDetailsData";
import { useEffect } from "react";

const details = () => {
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

  const handleNextPlace = () => {
    // TODO: navigate to next place
    console.log("Next place boop");
  };

  return (
    <ScrollView>
      <View>
        <CustomAppbar
          title={routeDetails?.name ? routeDetails.name : "Map point"}
          onGoBack={handleOnPress}
        />
      </View>
      <View>
        <Image
          // Image source does not work for me :((
          source={{
            uri: "https://images.pexels.com/photos/11789840/pexels-photo-11789840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.shortDescription}>
          {routeDetails?.short_description}
        </Text>
      </View>
      {routeDetails?.paragraphs.map((item) => {
        return (
          <>
            <Text key={item.id} style={styles.textParagraph}>
              {item.text}
            </Text>
            <Image
              source={{ uri: `${item.image}` }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.imageDescription}>
              {item.image_description}
            </Text>
          </>
        );
      })}
      <Button style={styles.nextPlaceButton} onPress={handleNextPlace}>
        <Text style={styles.buttonText}>Next place</Text>
      </Button>
    </ScrollView>
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
    padding: 10,
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default details;
