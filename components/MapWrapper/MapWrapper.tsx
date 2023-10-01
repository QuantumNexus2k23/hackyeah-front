import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AnimatedBottomBar, {
  AnimatedBottomBarProps,
} from "../AnimatedBottomBar/AnimatedBottomBar";
import FinishedRouteBottomBar from "../AnimatedBottomBar/FinishedRouteBottomBar";
import CustomAppbar from "../CustomAppbar/CustomAppbar";

type Props = {
  currentId: number;
  name?: string;
  children: React.ReactNode;
  allPointsVisited: boolean;
  comicsUrl?: string;
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
      <CustomAppbar title={name ?? ""} onGoBack={handleGoBack} />
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
