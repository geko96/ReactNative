import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Landing from "../Landing/Landing";
import New from "../NewTiket/New";


export default function Navigator() {
    const Stack = createNativeStackNavigator();


    return (
        
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: "#E0EFDE",
            }
        }}>
            <Stack.Screen name="Home" component={Landing} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
        
    );
}