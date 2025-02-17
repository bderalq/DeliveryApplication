import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import restaurants from '../data/restaurants'

const RestaurantsPage = () => {
  return (
    <View style={styles.listContainer}>
    <Text style ={styles.title}>RESTAURANTS</Text>
      {restaurants.map((restaurant) => (
        <RestaurantCard 
          name={restaurant.name} 
          image={restaurant.image}
          rating={restaurant.rating} 
          deliveryTime={restaurant.deliveryTime}
        />
      ))}
    </View>
  )
}

export default RestaurantsPage

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 20, 
      }, title :{
        fontSize :25,
        fontWeight :'bold',
        fontFamily : 'Thonburi',
        color: '#333',  
        marginBottom: 10
      }
})