import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChooseTrack from "../../components/ChooseTrack/ChooseTrack";
import { useTracksData } from "../../stores/tracksData/tracksData";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

const chooseTrack = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const { tracks, fetchTracks } = useTracksData();
  useEffect(() => {
    if (!id) return;
    fetchTracks(id.toString());
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
    >
      <ChooseTrack tracks={tracks} />
    </View>
  );
};

export default chooseTrack;
