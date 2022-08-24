import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "../Icons/Icon";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";


export default function Landing ({navigation}) {

    const [loaded] = useFonts({
        'Poppins': require("../../assets/Fonts/Poppins-Regular.ttf"),
        'PoppinsBold': require("../../assets/Fonts/Poppins-Bold.ttf"),
        'PoppinsSemiBold': require("../../assets/Fonts/Poppins-SemiBold.ttf"),
        'PoppinsMedium': require("../../assets/Fonts/Poppins-Medium.ttf"),
        'PoppinsLight': require("../../assets/Fonts/Poppins-Light.ttf"),
        'PoppinsThin': require("../../assets/Fonts/Poppins-Thin.ttf"),
        'PoppinsExtraLight': require("../../assets/Fonts/Poppins-ExtraLight.ttf"),
        'PoppinsExtraBold': require("../../assets/Fonts/Poppins-ExtraBold.ttf"),
    });	// fonts loaded state
    
    if (!loaded) {
        return <View />;
    }


    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View>
                    <TouchableOpacity onPress={() => {
                        alert("Hello");
                        }}>
                        <Icon style={styles.logo} image={require("../../assets/Images/Icons/menu.webp")} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("New");
                        }}>
                        <Icon style={styles.logo} image={require("../../assets/Images/Icons/add.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert("Hello");
                        }}>
                        <Icon style={styles.logo} image={require("../../assets/Images/Icons/sales.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert("Hello");
                        }}>
                        <Icon style={styles.logo} image={require("../../assets/Images/Icons/products.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert("Hello");
                        }}>
                        <Icon style={styles.logo} image={require("../../assets/Images/Icons/clients.webp")} />
                    </TouchableOpacity>
                </View>
                
                
                
            </View>
            <View style={styles.landing}>
                <Text style={styles.title}>Bienvenido</Text>


            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        backgroundColor: '#B3F2DD',
        alignItems: 'center',
        padding: 5,
        paddingTop: StatusBar.currentHeight,
        minHeight: '100%'

    },
    navbar: {
        width: '15%',
        height: "100%",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,        
    },
    landing: {
        flex: 1,
        width: 20,
        height: "100%",
        alignItems: 'center',
        

    },
    logo: {
        marginBottom: 10,

    },
    title: {
        textAlign: 'center',
        fontFamily: 'PoppinsBold',
        fontSize: 20,
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    },
    
});