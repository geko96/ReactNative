import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login/Login';
import { Provider, Context } from './Components/Context/Context';

import NavigatorContainer from './Components/Navigator/NavigatorContainer';

export default function App() {
  const [ loged, setLoged ] = useState(false);	// logued state
  const [ user, setUser ] = useState({});			// user state
  const [ token, setToken ] = useState('');			// token state

  const ProviderValue = {
    loged,
    setLoged,
    user,
    setUser,
    token,
    setToken
  }

  if(!loged) {
    return (
      <Provider value={ProviderValue}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }else{
    return (
      <Provider value={ProviderValue}>
        <NavigatorContainer/>
      </Provider>
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
