import React from "react";
import { View, StyleSheet } from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Home, GetStarted } from "../screens";
import Smp from "../screens/Smp";
import ResultText from "../screens/ResultText";
import { Maps } from "../screens";
import { Destinasi } from "../screens";
import MoreList from "../screens/MoreList";
import Tentang from "../screens/Tentang";
import Favorite from "../screens/Favorite";
import Corona from "../screens/corona";
import Informasi from "../screens/informasi";
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
      <Tab.Screen name="Destinasi" component={Destinasi} />
      <Tab.Screen name="Informasi" component={Informasi} />
      <Tab.Screen name="Lainnya" component={MoreList} />
    </Tab.Navigator>
  );
}

const Router =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Get Started" component={MainApp} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Smp" component={Smp} />
            <Stack.Screen name="ResultText" component={ResultText} />
            <Stack.Screen name="Maps" component={Maps} />
            <Stack.Screen name="Destinasi" component={Destinasi} />
            <Stack.Screen name="MoreList" component={MoreList} />
            <Stack.Screen name="Tentang" component={Tentang} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Corona" component={Corona} />
            <Stack.Screen name="Informasi" component={Informasi} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
export default Router