import { router } from "expo-router";
import { View } from "react-native";

import { useAuth } from "../stores/auth";
import { CredentialsData } from "../stores/auth/types";
import { useForm } from "react-hook-form";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";

export default function SignIn() {
  const login = useAuth((state) => state.login);
  const { control, handleSubmit, setError } = useForm<CredentialsData>();

  const onSubmit = async (credentials: CredentialsData) => {
    try {
      await login(credentials);
      router.replace("/");
    } catch (err) {
      setError("password", { message: "Wrong email or password!" });
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
      <ControlledTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Enter e-mail"
      />
      <ControlledTextInput
        secure
        control={control}
        name="password"
        label="Password"
        placeholder="Enter password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Log In</Button>
      <Button onPress={() => router.replace("/register")}>Sign up</Button>
    </View>
  );
}
