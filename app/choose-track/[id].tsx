import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChooseTrack from "../../components/ChooseTrack/ChooseTrack";
import { mockedTracks } from "../../components/ChooseTrack/mockedData";
import { TrackType } from "../../components/ChooseTrack/type";

const chooseTrack = () => {
    const insets = useSafeAreaInsets();
    const tracks: Array<TrackType> = mockedTracks;

    return (
        <View>
            <ChooseTrack tracks={tracks} />
        </View>
    );
};

export default chooseTrack;
