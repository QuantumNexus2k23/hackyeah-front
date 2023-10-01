import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../stores/auth";
import { useCitiesData } from "../stores/citiesData/citiesData";
import { useEffect } from "react";
import ChooseCity from "../components/ChooseCity/ChooseCity";
import * as Location from "expo-location";

const index = () => {
  const insets = useSafeAreaInsets();
  const { access, loading, restoreTokens } = useAuth(
    ({ access, loading, restoreTokens }) => ({
      access,
      loading,
      restoreTokens,
    })
  );

  useEffect(() => {
    if (!access) {
      restoreTokens();
    }
    Location.requestForegroundPermissionsAsync();
  }, []);

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
    </View>
  );
};

export default index;
