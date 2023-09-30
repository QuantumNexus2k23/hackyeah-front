import { router } from "expo-router";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomAppbar from "../components/CustomAppbar/CustomAppbar";

const details = () => {
    const insets = useSafeAreaInsets();

    const handleOnPress = () => {
        router.back();
    };

    return (
        <View>
            <View>
                <CustomAppbar
                    title={'Route "Kraków Stare Miasto"'}
                    onGoBack={handleOnPress}
                />
            </View>
            <Button mode="contained" onPress={handleOnPress}>
                Go back
            </Button>
        </View>
    );
};

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    image: {
        width: screenWidth,
        height: 200,
    },
});

export default details;
