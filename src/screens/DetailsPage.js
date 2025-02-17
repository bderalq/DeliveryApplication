import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import restaurants from '../data/restaurants'
import DetailsCard from '../components/DetailsCard'

const DetailsPage = () => {
  return (
    <View style={styles.listContainer}>
           <Text style={styles.title}>Details</Text>
           {restaurants.map((restaurant) => 
             restaurant.menuItems.map((menuItem) => (
               <DetailsCard 
                 name={menuItem.name} 
                 price={`${menuItem.price} $` }
                 image={menuItem.image}
                 description ={menuItem.description}
               />
             ))
           )}
         </View>  
  );
};

export default DetailsPage

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