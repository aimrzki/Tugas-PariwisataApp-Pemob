import React,{useEffect} from "react";
import { View,Text } from "react-native";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import Router from "./src/router";


function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}


export default App;
