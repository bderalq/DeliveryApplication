import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useMutation } from '@tanstack/react-query';
import { register } from '../api/auth';
import UserContext from '../context/UserContext';

const RegisterPage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Account created");
      setIsAuth(true);
    },
    onError: () => {
      alert("Error in creating account");
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
     <View style={styles.container}>
         <Text style = {styles.title}>register</Text>
         <TextInput
        style={styles.email}
        placeholder="Username"
        placeholderTextColor="#888"
        onChangeText={(value)=> 
          {setUserInfo({...userInfo, username:value})
        }}
      />
          <TextInput
        style={styles.password}
        placeholder="Enter Your Password"
        placeholderTextColor="#888"
        onChangeText={(value)=> 
          {setUserInfo({...userInfo, password:value})
        }}
      />

<TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            pickImage();
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        )}
      <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={() => {
            console.log(userInfo);
            mutate();
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color : "white",
              borderWidth: 1,
              borderColor: '#ddd',    
              borderRadius : 20,
              padding : 10
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <View style={styles.align}>
  <Text style={styles.align}>
    Already a user?  
    <Text 
      style={{ color: 'lightblue' }} 
      onPress={() => navigation.navigate('Login')}
    > Login Here
    </Text>
  </Text>
</View>
         </View>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#150d3c',
        paddingTop: 90,
        paddingBottom: 30,
        paddingHorizontal: 15, 
        justifyContent :'center',
        alignItems :'center'
      }, email : {
        width : '100%',
        height : 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        marginBottom: 15,
        paddingLeft: 15,
        fontFamily: 'Thonburi',
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',    
      }, title :{
        fontSize : 25,
        fontFamily : 'Thonburi',
        fontWeight : 'bold',
        marginBottom : 20,
        color : 'white'
      }, align :{
        fontSize : 14,
        flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    gap:6,
    fontFamily:'Thonburi',
    color:'white'
      }, password : {
        width : '100%',
        height : 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        //marginBottom: 15,
        paddingLeft: 15,
        fontFamily: 'Thonburi',
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',  
      }
})
