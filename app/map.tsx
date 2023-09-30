import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const map = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }}>
            <Text>Placeholder for map</Text>
        </View>
    );
};

export default map;
