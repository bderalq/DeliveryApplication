import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import restaurantCategories from '../data/cuisine'
import CuisineCard from '../components/CuisineCard'

const CuisinesPage = () => {
  return (
<View style={styles.listContainer}>
        <Text style ={styles.title}>CUISINES</Text>
        {restaurantCategories.map((item) => (
          <CuisineCard 
            categoryName={item.categoryName} 
            categoryImage={item.categoryImage} 
          />
        ))}
      </View>
  )
}

export default CuisinesPage

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