import { Appbar } from "react-native-paper";

type CustomAppbarProps = {
    title: string;
    onGoBack: () => void;
};

const CustomAppbar = (props: CustomAppbarProps) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={props.onGoBack} />
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    );
};

export default CustomAppbar;
