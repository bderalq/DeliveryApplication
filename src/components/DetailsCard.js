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
        borderRadius: 20,
        marginVertical: 8,
        width: '85%',
        height: 420,
        borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 15,
      },
      restaurantName:{
        fontFamily : 'Thonburi',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',      
        marginBottom:10,
        textAlign:'center'
    }, 
     image: {
        width: 200, 
        height: 170, 
        borderRadius: 10, 
        marginBottom: 15,

    },
    rating:{
        fontSize: 16,
        fontFamily : 'Thonburi',
        fontWeight: '600',
        color: '#333',      
        marginBottom:15,
        textAlign:'center'
    },
    time:{
        fontFamily : 'Thonburi',
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
      fontFamily : 'Thonburi',
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
        fontFamily : 'Thonburi',
        fontWeight: '600',
        color: '#333',      
        marginBottom:10,
        textAlign:'center',
        // paddingHorizontal: 10
    }, title : {
        fontSize : 16,
        fontWeight:'bold',
        fontFamily:'Thonburi',
        marginBottom:5,
        textAlign:'center'
    }
})