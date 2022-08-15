import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './Navigator';


export default function NavigatorContainer() {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}