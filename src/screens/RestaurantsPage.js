import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';
import { getAllRestaurants } from '../api/category';

const RestaurantsPage = ({ route }) => {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();
  const { categoryId } = route.params;

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await getAllRestaurants();
      setRestaurants(res);
    };
    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => restaurant.category._id === categoryId);

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.title}>RESTAURANTS</Text>
      {filteredRestaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant._id}
          onPress={() => {
            navigation.navigate('MenusPage', { restaurant });
          }}
        >
          <RestaurantCard 
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RestaurantsPage;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: '#150d3c',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 2,
    backgroundColor: '#4c3e5e',
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
});
