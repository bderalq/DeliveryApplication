import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthNavigator from './AuthNavigator';
import RestaurantNavigator from './RestaurantNavigator';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import MyCart from '../screens/MyCart';
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Fontisto from "@expo/vector-icons/EvilIcons";
import Ionicons from '@expo/vector-icons/EvilIcons';
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
       headerShown:false,
        tabBarStyle:{
            backgroundColor : '#150d3c'
        }
    }}>
        {/* <Tab.Screen name = "Account" component={AuthNavigator}         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color="white" />
          ),

        }}></Tab.Screen> */}
        <Tab.Screen name = "Home" component={RestaurantNavigator}         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="white" />
                    ),
        }}></Tab.Screen>
        <Tab.Screen name = "Cart" component={MyCart} options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="cart" size={24} color='white' />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})