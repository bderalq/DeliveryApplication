import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailsPage from '../screens/DetailsPage'
import MenusPage from '../screens/MenusPage'
import RestaurantsPage from '../screens/RestaurantsPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator(); 

const MenuNavigator = () => {
  return (
    <stack.Navigator
    screenOptions={{
      contentStyle : {backgroundColor : '#150d3c'},
    //  headerShown : false,
  }}
  >
        <stack.Screen name = 'RestaurantsPage' component={RestaurantsPage} />
        <stack.Screen name = 'MenusPage' component={MenusPage} />
        </stack.Navigator>
  )
}

export default MenuNavigator

const styles = StyleSheet.create({})