import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CuisineCard from './src/components/CuisineCard';
import restaurantCategories from './src/data/cuisine';
import RestaurantCard from './src/components/RestaurantCard';
import restaurants from './src/data/restaurants';
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* View CUISINES */}
      <View style={styles.listContainer}>
        {restaurantCategories.map((item) => (
          <CuisineCard 
            categoryName={item.categoryName} 
            categoryImage={item.categoryImage} 
          />
        ))}
      </View>

      <View style={styles.listContainer}>
        {restaurants.map((restaurant) => (
          <RestaurantCard 
            name={restaurant.name} 
            image={restaurant.image}
            rating={restaurant.rating} 
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </View>

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3222',
    paddingTop: 100,
    paddingBottom: 30,
    paddingHorizontal: 15, 
  }, listContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20, 
  },

});
