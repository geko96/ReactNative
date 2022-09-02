import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import React from "react";
import Login from "../Login/Login";
import TabNav from "../TabNav/TabNav";

export default function EntryPoint() {
    const loged = useSelector((state) => {
        return state.User.IsLoggedIn;
    });

    if(!loged) {
        return (

            <View style={styles.container}>
              <Login />
            </View>

        );
      }else{
        return (

            <TabNav/>

        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#37393a',
  
    },
  });