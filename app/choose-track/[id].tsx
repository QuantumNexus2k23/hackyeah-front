import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChooseTrack from "../../components/ChooseTrack/ChooseTrack";
import { useTracksData } from "../../stores/tracksData/tracksData";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";

const chooseTrack = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const { tracks, fetchTracks } = useTracksData();
  useEffect(() => {
    if (!id) return;
    fetchTracks(id.toString());
  }, []);

  return (
    <View>
      <CustomAppbar title="Choose track" onGoBack={() => router.back()} />
      <ChooseTrack tracks={tracks} />
    </View>
  );
};

export default chooseTrack;
