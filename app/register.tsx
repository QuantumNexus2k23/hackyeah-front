import { router } from "expo-router";
import { ActivityIndicator, Image, Text, View } from "react-native";

import { useAuth } from "../stores/auth";
import { useForm } from "react-hook-form";
import { RegisterData } from "../stores/auth/types";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";
import { useEffect } from "react";

export default function Register() {
  const [access, register, loading] = useAuth((state) => [
    state.access,
    state.register,
    state.loading,
  ]);
  const { control, handleSubmit, setError } = useForm<RegisterData>();

  useEffect(() => {
    if (access) router.replace("/");
  }, [access]);

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
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "30%",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "10%",
        }}
      >
        <Image source={require("../assets/images/logo.png")} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
        <View style={{ marginTop: 40 }}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button
              onPress={handleSubmit(onSubmit)}
              style={{ backgroundColor: "#7E494A" }}
              labelStyle={{ color: "white", width: "80%" }}
            >
              Sign up
            </Button>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Text>Already have an account?</Text>
            <Button
              onPress={() => router.replace("/login")}
              labelStyle={{ fontWeight: "bold" }}
            >
              Log in
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
