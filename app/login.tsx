import { router } from "expo-router";
import { ActivityIndicator, Image, Text, View } from "react-native";

import { useAuth } from "../stores/auth";
import { CredentialsData } from "../stores/auth/types";
import { useForm } from "react-hook-form";
import { ControlledTextInput } from "../components/ControlledTextInput";
import { Button } from "../components/Button";
import { useEffect } from "react";

export default function SignIn() {
  const [access, login, loading] = useAuth((state) => [
    state.access,
    state.login,
    state.loading,
  ]);
  const { control, handleSubmit, setError } = useForm<CredentialsData>();

  useEffect(() => {
    if (access) router.replace("/");
  }, [access]);

  const onSubmit = async (credentials: CredentialsData) => {
    try {
      await login(credentials);
      router.replace("/");
    } catch (err) {
      setError("password", { message: "Wrong email or password!" });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "30%",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "20%",
        }}
      >
        <Image
          style={{ width: 300, height: 140, marginTop: 20, marginRight: 20 }}
          source={require("../assets/images/logo.png")}
        />
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
        <View style={{ marginTop: 40 }}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button
              onPress={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#7E494A",
                borderRadius: 10,
                paddingVertical: 3,
                alignSelf: "center",
              }}
              labelStyle={{ color: "white", width: "80%" }}
            >
              Log In
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
            <Text>New here?</Text>
            <Button
              onPress={() => router.replace("/register")}
              labelStyle={{ fontWeight: "bold", color: "#7E494A" }}
            >
              Sign up
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
