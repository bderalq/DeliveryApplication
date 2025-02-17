import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MenuCard = ({image, name, price}) => {
    return (
  <View style={styles.card}> 
             <Image 
          source={{ uri: image }} 
          style={styles.image} 
        // resizeMode="contain"
        />
        <Text style={styles.restaurantName}> {name}</Text>

        <View style={styles.button}>
        <Text style={styles.rating}> {price}</Text>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.addto}>Add to Cart</Text>
        </TouchableOpacity>
        </View>

  </View>
    )
  }
  
  export default MenuCard
  
  const styles = StyleSheet.create({
      card : {
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: '#ffff', 
          borderRadius: 20, 
          padding: 12,
          marginVertical: 8, 
          width: '85%',
          height: 280,
          borderWidth: 1,
          borderColor: '#ddd', 
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        restaurantName:{
          fontFamily : 'Thonburi',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',      
          marginBottom:10
      }, 
       image: {
          width: 230, 
          height: 170, 
          borderRadius: 10, 
          marginBottom: 15,

      },
      rating:{
          fontSize: 15,
          fontFamily : 'Thonburi',
          fontWeight: '600',
          color: '#333',      
          marginBottom:10,
      },
      time:{
          fontFamily : 'Thonburi',
          fontSize: 15,
          fontWeight: '600',
          color: '#333',      
          marginBottom:15
      },    button : {
        flexDirection: 'row', 
       alignItems: 'center', 
       //justifyContent : 'center',
        marginTop: 1,
        paddingHorizontal: 20,
        gap : 20
      },
      addto : {
        fontSize: 14,
        fontFamily : 'Thonburi',
        fontWeight: '600',
        color: '#333',      
        marginBottom:10,
        borderWidth :2,
        padding :8,
        borderRadius : 50,
        textAlign : 'center'  
      }
  })