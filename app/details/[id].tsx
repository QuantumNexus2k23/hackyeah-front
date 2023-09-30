import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustomAppbar from "../../components/CustomAppbar/CustomAppbar";

const details = () => {
    const handleOnPress = () => {
        router.back();
    };

    const handleNextPlace = () => {
        // TODO: navigate to next place
        console.log("Next place");
    };

    return (
        <View>
            <View>
                <CustomAppbar
                    title={"Wawel Royal Castle"}
                    onGoBack={handleOnPress}
                />
            </View>
            <View>
                <Image
                    source={{
                        uri: "https://images.pexels.com/photos/11789840/pexels-photo-11789840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.textParagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam tristique purus ac quam tempus malesuada ut eget
                    purus. Maecenas quis mi gravida, porta est ac, tincidunt
                    velit. Aliquam non imperdiet libero. Morbi est purus, auctor
                    fringilla turpis eu, laoreet gravida purus. Mauris vel felis
                    vitae diam venenatis accumsan. Aliquam eu dolor rutrum,
                    interdum arcu a, consectetur leo. Pellentesque sit amet
                    viverra justo, vitae tempor elit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Pellentesque dapibus porttitor metus, eget tincidunt
                    metus vulputate eu. Quisque in sapien neque. Ut ullamcorper
                    ut lectus vitae semper. Pellentesque sit amet consequat
                    velit. Pellentesque sed quam eleifend, aliquet mauris vitae,
                    rutrum erat.{" "}
                </Text>
                <Button
                    style={styles.nextPlaceButton}
                    onPress={handleNextPlace}
                >
                    <Text style={styles.buttonText}>Next place</Text>
                </Button>
            </View>
        </View>
    );
};

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    image: {
        width: screenWidth,
        height: 200,
    },
    nextPlaceButton: {
        backgroundColor: "#7E494A",
        width: "95%",
        alignSelf: "center",
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    textParagraph: {
        padding: 10,
        fontSize: 16,
    },
});

export default details;
