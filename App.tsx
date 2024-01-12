import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigators/RootNavigator';
import HomeNavigator from './src/Navigators/HomeNavigator';
import React from 'react';




 export default function App() {
  return (
    <NavigationContainer>
      
      <RootNavigator/>
    </NavigationContainer>
  );
}




