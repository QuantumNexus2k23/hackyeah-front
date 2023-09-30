import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AnimatedBottomBar from "../AnimatedBottomBar/AnimatedBottomBar";

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
            <AnimatedBottomBar />
        </View>
    );
};

export default MapWrapper;
