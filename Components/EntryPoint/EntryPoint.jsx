import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import React from "react";
import Login from "../Login/Login";
import TabNav from "../TabNav/TabNav";

export default function EntryPoint() {
    
    let states = useSelector((state => {
        return state;
    }));	// get state from redux store
    
    const loged = states.User.IsLoggedIn;	// get login state from redux store

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