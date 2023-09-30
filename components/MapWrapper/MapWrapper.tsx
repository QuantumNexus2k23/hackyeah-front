import React from "react";
import { View } from "react-native";

type Props = { children: React.ReactNode };

const MapWrapper = ({ children }: Props) => {
  return <View>{children}</View>;
};

export default MapWrapper;
