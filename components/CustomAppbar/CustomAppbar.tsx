import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

type CustomAppbarProps = {
  title: string;
  onGoBack: () => void;
};

const CustomAppbar = ({ title, onGoBack }: CustomAppbarProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onGoBack} />
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
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
