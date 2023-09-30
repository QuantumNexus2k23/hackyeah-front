import { router } from "expo-router";
import { TouchableRipple } from "react-native-paper";
import TrackCard from "./TrackCard";
import { FlatList } from "react-native";
import { TrackType } from "../../stores/types";

const ChooseTrack = ({ tracks }: { tracks: TrackType[] }) => {
  const handleOnPress = (id: number) => {
    const route = `maps/${id}`;
    router.push(route);
  };

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .32)"
          onPress={() => handleOnPress(item.id)}
        >
          <TrackCard {...item} />
        </TouchableRipple>
      )}
      keyExtractor={(item) => `${item.name}${item.id}`}
    ></FlatList>
  );
};

export default ChooseTrack;
