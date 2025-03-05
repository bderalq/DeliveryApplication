import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AllRestCard = ({name, image, rating, deliveryTime}) => {
  return (
    // <TouchableOpacity style={styles.card}> 
    <View style = {styles.card}>
           <Image 
        source={{ uri: image }} 
        style={styles.image} 
        resizeMode="contain"
      />
      <View style = {styles.infoContainer}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
      <Text style={styles.deliveryTime}>⏱️ {deliveryTime}</Text>
      </View>

      <View style = {styles.infoContainer}>

      <Text style={styles.viewMenu}>VIEW MENU 🍔</Text>
      </View>

      </View>
// </TouchableOpacity>
  )
}
export default AllRestCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  alignItems:'center',
    backgroundColor: '#746574',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: '100%', 
    borderWidth: 1,
    height :120,
    borderColor: '#746574',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    gap:10,
},
  infoContainer: {
    marginTop: 10,
    marginLeft :10,
    alignItems: 'center',
    width : '130',
  // marginRight :10
  },
  restaurantName: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'white',
    marginBottom: 6,
  },
  deliveryTime: {
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'white',
    marginBottom: 6,
  },
  viewMenu: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
   // marginTop: 0,
    letterSpacing: 1,
   // marginLeft :4,
    width :120
  },
  image: {
    width: 100,
    height: 200, 
    borderRadius: 15,
    alignSelf:'auto'
  }
})