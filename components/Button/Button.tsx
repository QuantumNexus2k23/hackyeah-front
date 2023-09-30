import { Button as PaperButton } from "react-native-paper";
import { ButtonProps } from "./types";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ onPress, children }) => {
  return <PaperButton onPress={onPress}>{children}</PaperButton>;
};
