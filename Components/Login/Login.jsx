import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, {useEffect, useState,useContext} from "react";
import { Context } from "../Context/Context";
import { useFonts } from "expo-font";

const apiURL = "http://192.168.100.95:8080/api/login";


export default function Login () {
    const [username, setUsername] = useState("");	// username state
    const [password, setPassword] = useState("");	// password state

    const { loged, setLoged, user, setUser } = useContext(Context);	// context state

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
    }	// if fonts are not loaded, return empty view
    


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }} >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <View style={styles.input} >
                    <TextInput value={username} style={styles.input} placeholder="Username" onChangeText={(text) => {
                        setUsername(text);
                    }}/>
                    <TextInput value={password} style={styles.input} placeholder="Password" onChangeText={(text) => {
                        setPassword(text);

                    }} secureTextEntry={true} />
                    
                    <Button title="Login" onPress={() => {

                        if (username == "" || password == "") {
                            alert("Completar datos de ingreso");
                        }else{
                            fetch(apiURL, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    mail: username,
                                    password: password
                                })
                            })
                            .then(res => res.json())
                            .then(data => {
                                if (data.mail === username) {
                                    setLoged(true);
                                    setUser(data);
                                }else{
                                    alert("Login failed");
                                }
                                
                            })
                            .catch(err => console.log(err));
                            setPassword("");
                            setUsername("");
                        }

                        

                        
                    }} />

                    <Text style={styles.margin10}>Forgot your password?</Text>


                </View>
                

                
            </View>
        </TouchableWithoutFeedback>
    );
    
}


// estilos
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7F7979',
      alignItems: 'center',
      padding: 20,
      minHeight: '100%'
      
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 50,
        fontFamily: 'PoppinsBold'
        
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderRadius: 5,
        fontFamily: 'PoppinsMedium',
        textAlign: 'center'

    },
    margin10: {
        marginTop: 20,
    },
  });