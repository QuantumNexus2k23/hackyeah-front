import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AnimatedBottomBar, {
  AnimatedBottomBarProps,
} from "../AnimatedBottomBar/AnimatedBottomBar";

type Props = {
  currentId: number;
  name?: string;
  children: React.ReactNode;
} & AnimatedBottomBarProps;

const MapWrapper = ({
  currentId,
  children,
  name,
  ...animatedBottomBarProps
}: Props) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={{ height: "100%" }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title={name ?? ''} />
      </Appbar.Header>
      {children}
      <AnimatedBottomBar currentId={currentId} {...animatedBottomBarProps} />
    </View>
  );
};

export default MapWrapper;
