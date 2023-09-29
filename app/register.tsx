import { router } from "expo-router";
import { Text, View } from "react-native";

import { useAuth } from "../stores/auth";
import { useForm } from "react-hook-form";
import { RegisterData } from "../stores/auth/types";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";
import API from "../api";

export default function Register() {
  const setTokens = useAuth((state) => state.setTokens);
  const { control, handleSubmit } = useForm<RegisterData>();

  const onSubmit = async ({
    username,
    password,
    re_password,
  }: RegisterData) => {
    if (password !== re_password) {
      console.log("Passwords must be the same!");
      return;
    }
    const data = await API.register({ username, password, re_password });
    setTokens(data);
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ControlledTextInput control={control} name="username" label="Login" />
      <ControlledTextInput
        secure
        control={control}
        name="password"
        label="password"
      />
      <ControlledTextInput
        secure
        control={control}
        name="re_password"
        label="Repeat password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Boop</Button>
      <Button onPress={() => router.replace("/login")}>login</Button>
    </View>
  );
}
