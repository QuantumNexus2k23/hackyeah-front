import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
    const insets = useSafeAreaInsets();

    const handleOnPress = () => {
        router.replace("/map");
    };

    return (
        <View
            style={{
                paddingTop: insets.top,
            }}
        >
            <Button mode="contained" onPress={handleOnPress}>
                Go to map
            </Button>
        </View>
    );
};

export default index;
