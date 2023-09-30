import { FieldValues, useController } from "react-hook-form";
import { Text, View, TextInput } from "react-native";
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
    fieldState: { error },
  } = useController({ control, name });

  return (
    <View style={{ width: "90%" }}>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        onChangeText={onChange}
        value={value}
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          fontSize: 14,
          height: 36,
          borderRadius: 18,
          paddingLeft: 18,
        }}
      />
      {error ? <Text style={{ color: "red" }}>{error.message}</Text> : null}
    </View>
  );
};
