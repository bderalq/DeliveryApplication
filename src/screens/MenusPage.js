import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import restaurants from '../data/restaurants'
import MenuCard from '../components/MenuCard'
const MenusPage = () => {
  return (
      <View style={styles.listContainer}>
           <Text style={styles.title}>Menu</Text>
           {restaurants.map((restaurant) => 
             restaurant.menuItems.map((menuItem) => (
               <MenuCard 
                 key={menuItem.id}
                 name={menuItem.name} 
                 price={`${menuItem.price} $` }
                 image={menuItem.image}
               />
             ))
           )}
         </View>  
  )
}

export default MenusPage

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