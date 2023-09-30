import { router } from "expo-router";
import { View } from "react-native";

import { useAuth } from "../stores/auth";
import { CredentialsData } from "../stores/auth/types";
import { useForm } from "react-hook-form";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";
import API from "../api";

export default function SignIn() {
  const setTokens = useAuth((state) => state.setTokens);
  const { control, handleSubmit } = useForm<CredentialsData>();

  const onSubmit = async (credentials: CredentialsData) => {
    try {
      console.log(credentials);
      const data = await API.login(credentials);
      console.log(data);
      setTokens(data);
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ControlledTextInput control={control} name="username" label="Login" />
      <ControlledTextInput
        secure
        control={control}
        name="password"
        label="password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Boop</Button>
      <Button onPress={() => router.replace("/register")}>Register</Button>
    </View>
  );
}
