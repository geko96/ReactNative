import { StyleSheet, View, Text } from "react-native";
import Icon from "../Icons/Icon";


export default function Landing () {


    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View>
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/menu.webp")} />
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/add.png")} />
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/clients.webp")} />
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/products.png")} />
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/sales.png")} />
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/config.png")} />
                </View>
            </View>
            <View style={styles.landing}>
                <Text>Landing</Text>
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
        paddingTop: 50,
        minHeight: '100%'

    },
    navbar: {
        width: '15%',
        height: "100%",
        borderRadius: 50,
        alignItems: 'center',
        marginRight: 10,        
    },
    landing: {
        flex: 1,
        width: 20,
        height: "100%",
        borderWidth: 1,

    },
    logo: {
        marginBottom: 10,

    },
    
});