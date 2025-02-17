import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CuisineCard from './src/components/CuisineCard';
import restaurantCategories from './src/data/cuisine';
import RestaurantCard from './src/components/RestaurantCard';
import restaurants from './src/data/restaurants';
import MenuCard from './src/components/MenuCard';
import CuisinesPage from './src/screens/CuisinesPage';
import RestaurantsPage from './src/screens/RestaurantsPage';
import MenusPage from './src/screens/MenusPage';
import DetailsCard from './src/components/DetailsCard';
import DetailsPage from './src/screens/DetailsPage';
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
            <CuisinesPage />
      <RestaurantsPage />
      <MenusPage />
      <DetailsPage />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffff',
    paddingTop: 90,
    paddingBottom: 30,
    paddingHorizontal: 15, 
  }, listContainer: {
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
});
