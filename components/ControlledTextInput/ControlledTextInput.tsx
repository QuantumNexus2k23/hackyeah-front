import { FieldValues, useController } from "react-hook-form";
import { Text, View, TextInput } from "react-native";
import { ControlledTextInputProps } from "./types";
import { ReactElement } from "react";

export const ControlledTextInput = <T extends FieldValues>({
  label,
  control,
  name,
  secure,
  placeholder,
}: ControlledTextInputProps<T>): ReactElement => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name });

  return (
    <View style={{ width: "90%", marginVertical: 5 }}>
      <Text style={{ paddingLeft: 12, marginVertical: 3 }}>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: 36,
          borderRadius: 18,
          paddingLeft: 18,
        }}
        placeholderTextColor="#BFBFBF"
      />
      {error ? <Text style={{ color: "red" }}>{error.message}</Text> : null}
    </View>
  );
};
