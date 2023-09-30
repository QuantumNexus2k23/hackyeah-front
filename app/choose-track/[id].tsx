import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChooseTrack from "../../components/ChooseTrack/ChooseTrack";
import { mockedTracks } from "../../components/ChooseTrack/mockedData";
import { TrackType } from "../../components/ChooseTrack/type";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";
import { router } from "expo-router";

const chooseTrack = () => {
    const tracks: Array<TrackType> = mockedTracks;

    const handleGoBack = () => {
        router.back();
    };

    return (
        <View>
            <CustomAppbar title="Cracow Routes" onGoBack={handleGoBack} />
            <ChooseTrack tracks={tracks} />
        </View>
    );
};

export default chooseTrack;
