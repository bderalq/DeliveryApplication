import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
// import cartItemsData from "../data/cartItems";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MyCart = () => {
  const navigation = useNavigation();

  const [cart, setCart] = useState([
    { id: "1", name: "Margherita Pizza", quantity: 2, price: 10.99 },
    { id: "2", name: "Tiramisu", quantity: 1, price: 6.99 },
    { id: "3", name: "Beef Steak", quantity: 3, price: 8.99 },
  ]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurants = await getAllRestaurants();
      if (restaurants.length > 0) {
        const itemsWithQuantity = restaurants[0].items.map(item => ({
          ...item,
          quantity: 1,
          id: item._id,
        }));
        setCart(itemsWithQuantity);
      }
    };
    fetchRestaurants();
  }, []);


  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MY CART</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>
                {item.name} x{item.quantity}
              </Text>
              <Text style={styles.itemPrice}>
                {item.price * item.quantity} Kd
              </Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => decreaseQuantity(item.id)}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={styles.button} onPress={() => increaseQuantity(item.id)}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(item.id)}>
                  <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Cost: {totalCost} Kd</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#150d3c'
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
    borderColor: '#746574',
  },
  item: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#746574',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: '100%', 
    borderWidth: 1,
    height: 120,
    borderColor: '#746574',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    gap: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'white',
    marginBottom: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4c3e5e',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#4c3e5e',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: '100%', 
    borderWidth: 1,
    height: 80,
    borderColor: '#746574',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    gap: 10,
  },
  totalText: {
    fontSize: 17,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
    marginLeft: 4,
  },
});
