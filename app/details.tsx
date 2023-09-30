import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const details = () => {
    const insets = useSafeAreaInsets();

    const handleOnPress = () => {
        router.back();
    };

    return (
        <View>
            <View style={{ paddingTop: insets.top }}>
                <Text>Details</Text>
            </View>
            <Button mode="contained" onPress={handleOnPress}>
                Go back
            </Button>
        </View>
    );
};

export default details;
