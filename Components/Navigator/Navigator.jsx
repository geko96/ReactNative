import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Landing from "../Landing/Landing";
import New from "../NewTiket/New";


export default function Navigator() {
    const Stack = createNativeStackNavigator();


    return (
        
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Landing}  />
            <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
        
    );
}