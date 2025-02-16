import { Image, StyleSheet, Text, View } from 'react-native'
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
    card : {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderRadius: 20, 
        padding: 12,
        marginVertical: 6, 
        width: '90%',
        borderWidth: 1,
        borderColor: '#ddd', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
      },
      cuisinename:{
        fontSize: 16,
        fontWeight: '600',
        color: '#333',    
    }, 
     image: {
        width: 50, 
        height: 50, 
        borderRadius: 10, 
        marginRight: 15, 
      },
})