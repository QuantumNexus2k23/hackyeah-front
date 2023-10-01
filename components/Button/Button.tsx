import { Button as PaperButton } from "react-native-paper";
import { ButtonProps } from "./types";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({
  onPress,
  children,
  style,
  labelStyle,
}) => {
  return (
    <PaperButton onPress={onPress} style={style} labelStyle={labelStyle}>
      {children}
    </PaperButton>
  );
};
