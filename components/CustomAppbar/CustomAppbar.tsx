import { hasCustomScheme } from "expo-linking";
import { router } from "expo-router";
import React from "react";
import { Modal, Platform, StyleSheet, Text } from "react-native";
import { Appbar, PaperProvider, Portal } from "react-native-paper";

type CustomAppbarProps = {
  title: string;
  onGoBack: () => void;
};

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const CustomAppbar = ({ title, onGoBack }: CustomAppbarProps) => {
  const goToHeroesPage = () => {
    router.push("/heroes");
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onGoBack} />
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
      <Appbar.Action icon={MORE_ICON} onPress={goToHeroesPage} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomAppbar;
