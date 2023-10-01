import { TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  children: string;
  onPress: () => void | Promise<void>;
  style?: ViewStyle;
  labelStyle?: TextStyle;
};
