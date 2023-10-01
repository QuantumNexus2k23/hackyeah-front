import { router } from "expo-router";
import TrackCard from "./TrackCard";
import { FlatList, TouchableOpacity } from "react-native";
import { TrackType } from "../../stores/types";

const ChooseTrack = ({ tracks }: { tracks: TrackType[] }) => {
  const handleOnPress = (id: number) => {
    const route = `track-details/${id}`;
    router.push(route);
  };

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleOnPress(item.id)}
          style={{ margin: 10 }}
        >
          <TrackCard {...item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => `${item.name}${item.id}`}
    />
  );
};

export default ChooseTrack;
