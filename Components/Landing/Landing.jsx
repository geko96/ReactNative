import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "../Icons/Icon";

export default function Landing ({user}) {

    


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
                        alert("Hello");
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
                
                <TouchableOpacity onPress={() => {
                    alert("Hello");
                    }}>
                    <Icon style={styles.logo} image={require("../../assets/Images/Icons/config.png")} />
                </TouchableOpacity>
                
            </View>
            <View style={styles.landing}>
                <Text>{user.name}</Text>
                <Text>{user.mail}</Text>
                <Text>{user.cuit}</Text>
                <Text>{user.token}</Text>

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
        justifyContent: 'space-between',
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