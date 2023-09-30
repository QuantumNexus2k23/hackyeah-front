import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";

type Props = { children: React.ReactNode };

const MapWrapper = ({ children }: Props) => {
    const handleGoBack = () => {
        router.back();
    };

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={handleGoBack} />
                <Appbar.Content title={'Trasa "Kraków Stare Miasto"'} />
            </Appbar.Header>
            {children}
        </View>
    );
};

export default MapWrapper;
