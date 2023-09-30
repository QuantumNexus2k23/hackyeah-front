import { Redirect, router } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../stores/auth";
import { useCitiesData } from "../stores/citiesData/citiesData";
import { useEffect } from "react";

const index = () => {
  const insets = useSafeAreaInsets();
  const { access, loading } = useAuth();

  const { cities, fetchCities } = useCitiesData();
  useEffect(() => {
    fetchCities();
  }, []);

  const handleOnPress = (id: number) => {
    router.push(`/choose-track/${id}`);
  };

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (loading) {
    return <ActivityIndicator />;
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
      }}
    >
      {cities.map((item, index) => (
        <Button
          key={index}
          mode="contained"
          onPress={() => handleOnPress(item.id)}
        >
          {item.name}
        </Button>
      ))}
    </View>
  );
};

export default index;
