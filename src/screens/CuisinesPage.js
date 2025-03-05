import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CuisineCard from '../components/CuisineCard'
import RestaurantCard from '../components/RestaurantCard'
import { getAllCuisines, getAllRestaurants } from '../api/category'
import { useQuery } from '@tanstack/react-query'

const CuisinesPage = ({ navigation }) => {
  // const [cuisines, setCuisine] = useState([])
  // const [restaurants, setRestaurants] = useState([])

  // useEffect(() => {
  //   const fetchCuisines = async () => {
  //     const res = await getAllCuisines()
  //     setCuisine(res)
  //   }
  //   fetchCuisines()
  // }, [])
 
  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     const res = await getAllRestaurants()
  //     setRestaurants(res)
  //   }
  //   fetchRestaurants()
  // }, [])
const {data : restData } = useQuery({
  queryKey:["fetchRestaurats"],
  queryFn: () => getAllRestaurants()
})

  // console.log("cuisine:", cuisines)
  const {data} = useQuery({
    queryKey:["fetchCuisines"],
    queryFn: () => getAllCuisines(),
  })
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>FILTER BY CUISINE</Text>
      <View style={{ height: 120 }}>
        <ScrollView horizontal>
          {data?.map((item) => (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                navigation.navigate('RestaurantsPage', { categoryId: item._id })
              }
            >
              <View style={styles.card}>
                <CuisineCard
                  categoryName={item.name}
                  categoryImage={item.image}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.title}>ALL RESTAURANTS</Text>
      <ScrollView>
      {restData?.map((restaurant) => (
          <TouchableOpacity
            key={restaurant._id} 
            onPress={() => {
              navigation.navigate('MenusPage', { restaurant })
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
    </View>
  )
}

export default CuisinesPage

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
    marginTop: 10
  },
  card: {
    marginRight: 10
  }
})
