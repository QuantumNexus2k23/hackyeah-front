import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

type CustomAppbarProps = {
    title: string;
    onGoBack?: () => void;
};

const CustomAppbar = (props: CustomAppbarProps) => {
    return (
        <Appbar.Header>
            {props.onGoBack && <Appbar.BackAction onPress={props.onGoBack} />}
            <Appbar.Content
                title={props.title}
                titleStyle={styles.titleStyle}
            />
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
