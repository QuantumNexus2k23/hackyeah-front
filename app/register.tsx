import { router } from "expo-router";
import { View } from "react-native";

import { useAuth } from "../stores/auth";
import { useForm } from "react-hook-form";
import { RegisterData } from "../stores/auth/types";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";

export default function Register() {
  const register = useAuth((state) => state.register);
  const { control, handleSubmit, setError } = useForm<RegisterData>();

  const onSubmit = async ({ email, password, re_password }: RegisterData) => {
    if (password !== re_password) {
      setError("re_password", { message: "Passwords do not match!" });
      return;
    }
    try {
      await register({ email, password });
      router.replace("/");
    } catch (err) {
      setError("re_password", {
        message: "An user with such e-mail already exists!",
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <ControlledTextInput
        secure
        control={control}
        name="re_password"
        label="Retype password"
        placeholder="Enter password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Sign up</Button>
      <Button onPress={() => router.replace("/login")}>
        Przejdź do logowania
      </Button>
    </View>
  );
}
