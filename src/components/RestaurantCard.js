import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RestaurantCard = ({name, image, rating, deliveryTime}) => {
  return (
    <View style={styles.card}> 
           <Image 
        source={{ uri: image }} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.restaurantName}> {name}</Text>
      <Text style={styles.rating}> {rating}</Text>
      <Text style={styles.time}> {deliveryTime}</Text>
</View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    card : {
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#ffff', 
        borderRadius: 20, 
        padding: 12,
        marginVertical: 8, 
        width: '60%',
        height: 300,
        borderWidth: 1,
        borderColor: '#ddd', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      restaurantName:{
        fontFamily : 'Thonburi',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',      
        marginBottom:15
    }, 
     image: {
        width: 150, 
        height: 150, 
        borderRadius: 10, 
        marginBottom: 15
    },
    rating:{
        fontSize: 17,
        fontFamily : 'Thonburi',
        fontWeight: '600',
        color: '#333',      
        marginBottom:10
    },
    time:{
        fontFamily : 'Thonburi',
        fontSize: 15,
        fontWeight: '600',
        color: '#333',      
        marginBottom:15
    }
})