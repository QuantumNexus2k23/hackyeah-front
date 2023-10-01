import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AnimatedBottomBar, {
  AnimatedBottomBarProps,
} from "../AnimatedBottomBar/AnimatedBottomBar";
import FinishedRouteBottomBar from "../AnimatedBottomBar/FinishedRouteBottomBar";

type Props = {
  currentId: number;
  name?: string;
  children: React.ReactNode;
  allPointsVisited: boolean;
} & AnimatedBottomBarProps;

const MapWrapper = ({
  currentId,
  children,
  name,
  allPointsVisited,
  ...animatedBottomBarProps
}: Props) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={{ height: "100%" }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title={name ?? ""} />
      </Appbar.Header>
      {children}
      {!allPointsVisited && (
        <AnimatedBottomBar currentId={currentId} {...animatedBottomBarProps} />
      )}
      {allPointsVisited && (
        <FinishedRouteBottomBar hero={animatedBottomBarProps.hero} />
      )}
    </View>
  );
};

export default MapWrapper;
