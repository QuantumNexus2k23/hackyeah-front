import { TrackType } from "./type";
import { router } from "expo-router";
import { TouchableRipple } from "react-native-paper";
import TrackCard from "./TrackCard";
import CustomAppbar from "../CustomAppbar/CustomAppbar";

const ChooseTrack = ({ tracks }: { tracks: TrackType[] }) => {
    const handleOnPress = (id: number) => {
        const route = `maps/${id}`;
        router.push(route);
    };

    return (
        <>
            <CustomAppbar title="Cracow Routes" />
            {tracks.map((track, index) => (
                <TouchableRipple
                    key={`${track.name}${index}`}
                    rippleColor="rgba(0, 0, 0, .32)"
                    onPress={() => handleOnPress(track.id)}
                >
                    <TrackCard {...track} />
                </TouchableRipple>
            ))}
        </>
    );
};

export default ChooseTrack;
