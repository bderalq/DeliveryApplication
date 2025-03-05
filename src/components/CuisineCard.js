import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CuisineCard = ({categoryName, categoryImage}) => {

  return (
 <View style={styles.card}>   
           <Image 
        source={{ uri: categoryImage }} 
        style={styles.image} 
        resizeMode="contain" // Ensures proper image display
      />
      <Text style={styles.cuisinename}> {categoryName}</Text>
 </View> 
  )
}

export default CuisineCard

const styles = StyleSheet.create({
  card: {
    width: 150, 
    height: 100, 
    borderRadius: 15,
    backgroundColor: '#746574',
    overflow: 'hidden',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

  },
  cuisinename: {
    marginTop: 5, 
    fontSize: 16, 
   // fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
    letterSpacing: 1.5,
    textAlign: 'center', 
  },
  image: {
    width: 70,
    height: 70, 
    borderRadius: 10,
  },
});