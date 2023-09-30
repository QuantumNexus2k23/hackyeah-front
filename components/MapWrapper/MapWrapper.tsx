import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import AnimatedBottomBar from "../AnimatedBottomBar/AnimatedBottomBar";
import CustomAppbar from "../CustomAppbar/CustomAppbar";

type Props = { id: number; children: React.ReactNode };

const MapWrapper = ({ id, children }: Props) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={{ height: "100%" }}>
      <CustomAppbar
        title={'Route "Kraków Stare Miasto"'}
        onGoBack={handleGoBack}
      />
      {children}
      <AnimatedBottomBar routePointId={id} />
    </View>
  );
};

export default MapWrapper;
