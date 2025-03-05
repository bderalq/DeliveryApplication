import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';

const Stack = createNativeStackNavigator(); // Changed to Stack
const AuthNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: { backgroundColor: '#150d3c' },
        headerTintColor: '#ffffff',   
        contentStyle : {backgroundColor : '#150d3c'},
       // headerShown : false
    }}
    >
        <Stack.Screen name = 'Login' component={LoginPage} />
        <Stack.Screen name = 'Register' component={RegisterPage} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})