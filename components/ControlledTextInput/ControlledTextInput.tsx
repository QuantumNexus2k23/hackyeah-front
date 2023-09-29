import { FieldValues, useController } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { ControlledTextInputProps } from "./types";
import { ReactElement } from "react";

export const ControlledTextInput = <T extends FieldValues>({
  label,
  control,
  name,
  secure,
}: ControlledTextInputProps<T>): ReactElement => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};
