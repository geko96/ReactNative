import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Navigator from "../Navigator/Navigator";
import UserSection from "../UserSection/UserSection";
import ConfigSection from "../ConfigSection/ConfigSection";
import Icon from "../Icons/Icon";
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';


export default function TabNav({props}) {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator options={{
            tabBarOptions: {
                activeTintColor: "#E0EFDE",
            }
        }}>
            <Tab.Screen name="Facturador" component={Navigator} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <FontAwesome5 name="cash-register" size={24} color="black" />
                    )
                },
                tabBarShowLabel: false,
            }} />
            <Tab.Screen name="UserSection" component={UserSection} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <AntDesign name="user" size={24} color="black" />
                    )
                }
            }} />
            <Tab.Screen name="ConfigSection" component={ConfigSection} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <AntDesign name="setting" size={24} color="black" />
                    )
                }
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

});