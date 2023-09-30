import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AnimatedBottomBar, {
  AnimatedBottomBarProps,
} from "../AnimatedBottomBar/AnimatedBottomBar";

type Props = { children: React.ReactNode } & AnimatedBottomBarProps;

const MapWrapper = ({ children, ...animatedBottomBarProps }: Props) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={{ height: "100%" }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title={'Trasa "Kraków Stare Miasto"'} />
      </Appbar.Header>
      {children}
      <AnimatedBottomBar {...animatedBottomBarProps} />
    </View>
  );
};

export default MapWrapper;
