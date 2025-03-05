import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DetailsCard = ({image,name,price, description}) => {
  return (
  
     <View style={styles.card}> 
     <Image 
         source={{ uri: image }} 
         style={styles.image} 
         resizeMode="contain"
       />
       <Text style={styles.restaurantName}> {name}</Text>
       <Text style={styles.title}>Description</Text>
       <Text style={styles.description}> {description}</Text>
       <Text style={styles.rating}> {price}</Text>
        <TouchableOpacity>
          <Text style={styles.addto}>Add to Cart</Text>
        </TouchableOpacity>

 </View>
  )
}

export default DetailsCard

const styles = StyleSheet.create({
    card : {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginVertical: 12,
        paddingVertical: 20, 
        width: '90%', 
        height: 'auto', 
        borderWidth: 1,
        borderColor: '#eee', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        paddingHorizontal: 15,
      },
      restaurantName:{
        fontFamily : 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',      
        marginBottom:10,
        textAlign:'center'
    }, 
     image: {
        width: '100%', 
        height: 250, 
        borderRadius: 15, 
        marginBottom: 15,

    },
    rating:{
        fontSize: 18,
        fontFamily : 'Roboto',
        fontWeight: '600',
        color: '#333',      
        marginBottom:20,
        textAlign:'center'
    },
    time:{
        fontFamily : 'Roboto',
        fontSize: 15,
        fontWeight: '600',
        color: '#333',      
        marginBottom:15,
        textAlign:'center'
    },    button : {
      flexDirection: 'row', 
     alignItems: 'center', 
      marginTop: 10,
      paddingHorizontal: 20,
      gap : 20
    },
    addto : {
      fontSize: 14,
      fontFamily : 'Roboto',
      fontWeight: '600',
      color: '#333',      
      marginBottom:10,
      borderWidth :2,
      padding :8,
      borderRadius : 50,
      textAlign : 'center'
    },
    description : {
        fontSize: 15,
        fontFamily : 'Roboto',
        fontWeight: '600',
        color: '#333',      
        marginBottom:10,
        textAlign:'center',
        // paddingHorizontal: 10
    }, title : {
        fontSize : 18,
        fontWeight:'bold',
        fontFamily:'Roboto',
        marginBottom:8,
        textAlign:'center',
        paddingHorizontal :10
    }
})