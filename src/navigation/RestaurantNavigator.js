import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CuisinesPage from '../screens/CuisinesPage';
import RestaurantsPage from '../screens/RestaurantsPage';
import MenusPage from '../screens/MenusPage';
import DetailsPage from '../screens/DetailsPage';
import MyCart from '../screens/MyCart';

const Stack = createNativeStackNavigator(); // Changed to Stack

const RestaurantNavigator = () => {
  return (
    <Stack.Navigator     screenOptions={{
      headerStyle: { backgroundColor: '#150d3c' },
      headerTintColor: '#ffffff', 
      contentStyle : {backgroundColor : '#150d3c'},
      //headerShown : false,
  }}
  >
        <Stack.Screen name = 'Cuisines' component={CuisinesPage} />
        <Stack.Screen name = 'RestaurantsPage' component={RestaurantsPage} />
        <Stack.Screen name = 'MenusPage' component={MenusPage} />
        <Stack.Screen name = 'DetailsPage' component={DetailsPage} />
        {/* //<Stack.Screen name = "Cart" component={MyCart}/> */}

        </Stack.Navigator>
  )
}

export default RestaurantNavigator

const styles = StyleSheet.create({})