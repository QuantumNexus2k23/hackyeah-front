import { Redirect } from "expo-router";
import { ActivityIndicator, View, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../stores/auth";
import { useCitiesData } from "../stores/citiesData/citiesData";
import { useEffect, useRef } from "react";
import ChooseCity from "../components/ChooseCity/ChooseCity";
import * as Location from "expo-location";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text } from "react-native-paper";

const index = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  const { access, loading, restoreTokens } = useAuth(
    ({ access, loading, restoreTokens }) => ({
      access,
      loading,
      restoreTokens,
    })
  );

  useEffect(() => {
    // if (!access) {
    //   restoreTokens();
    // }
    const checkLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const serviceStatus = await Location.hasServicesEnabledAsync();
      if (serviceStatus) return;

      bottomSheetModalRef.current?.present();
    };
    checkLocation();
  }, [access]);

  const { cities, fetchCities } = useCitiesData();
  useEffect(() => {
    fetchCities();
  }, []);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!access) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.

  return (
    <View
      style={{
        paddingTop: insets.top,
        flexDirection: "column",
      }}
    >
      <ChooseCity cities={cities} />
      <BottomSheetModal snapPoints={["20%"]} ref={bottomSheetModalRef}>
        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "#EEE",
            alignItems: "center",
            paddingHorizontal: 16,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <Text
            variant="bodyLarge"
            style={{
              textAlign: "center",
              paddingTop: 20,
            }}
          >
            We strongly encourage you to turn on Location services
          </Text>
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default index;
