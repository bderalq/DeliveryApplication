import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import restaurants from '../data/restaurants'
import MenuCard from '../components/MenuCard'
import { useNavigation } from '@react-navigation/native'
import DetailsCard from '../components/DetailsCard'
import DetailsPage from './DetailsPage'

const MenusPage = ({route}) => {
  const { restaurant } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.title}>MENU</Text>
      {restaurant.items.map((menuItem) => (
        <TouchableOpacity
          key={menuItem._id}
          onPress={() => navigation.navigate('DetailsPage', { menuItem })}
          >
          <MenuCard 
            name={menuItem.name}
            price={`${menuItem.price} $`}
            image={menuItem.image}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default MenusPage

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 20, 
      }, title :{
        fontSize :25,
        fontWeight :'bold',
        fontFamily : 'Roboto',
        color: '#333',  
        marginBottom: 10,       
        letterSpacing:2

      }
})