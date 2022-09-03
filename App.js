import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { Provider, useSelector } from 'react-redux';
import EntryPoint from './Components/EntryPoint/EntryPoint';

import Store from './Components/Context/Index';
export default function App() {

  
return (
  <Provider store={Store}>
    <EntryPoint />
  </Provider>
)
  
  
}


