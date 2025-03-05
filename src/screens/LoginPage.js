import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import UserContext from '../context/UserContext';
import { Button } from '@react-navigation/elements';

const LoginPage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      alert("Welcome");
      setIsAuth(true);
      console.log("Auth status changed to true");
      },
    onError: (error) => {
      alert("Something went wrong");
      console.log(error);
    },
  });
  const handleLogin = () => {
    mutate();
  };
  return (
    <View style={styles.container}>
        <Text style = {styles.title}>login</Text>
        <TextInput 
        style = {styles.email}
        placeholder='Username'
        placeholderTextColor="#888"
        value = {userInfo.username}
        onChangeText={(value) =>
          setUserInfo({ ...userInfo, username: value })
        }
      />
            
            <TextInput 
        style = {styles.email}
        placeholder='Enter Your Password'
        placeholderTextColor="#888"
        value={userInfo.password}
        onChangeText={(value) =>
          setUserInfo({ ...userInfo, password: value })
        }
        secureTextEntry
      />    
              {/* <Button title="Login" onPress={handleLogin} /> */}
                    <TouchableOpacity
                        style={{
                          padding: 10,
                          borderRadius: 5,
                         //marginTop: 20,
                          alignItems: "center",
                        }}
                        onPress={handleLogin}
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
                          Login
                        </Text>
                      </TouchableOpacity>
              
        <Text style={styles.align}> Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
            // navigation.navigate(ROUTES.AUTH.REGISTER);
          }}
        >
          <Text style={styles.align}>Register</Text>
        </TouchableOpacity>

        {/* <View style={styles.align}>
        <Text style={styles.align}>
          Not a user? </Text> <TouchableOpacity
          onPress={()=> navigatoin.navigate('Register')}
          > <Text style={styles.align}>Register Here</Text></TouchableOpacity>
        </View> */}
        </View>
  )
}

export default LoginPage

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
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',    
      }, title :{
        fontSize : 25,
        fontFamily : 'Roboto',
        fontWeight : 'bold',
        marginBottom : 20,
        color : 'white'
      }, align :{
        fontSize : 14,
        flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    gap:6,
    fontFamily:'Roboto',
    color :'white'
      }, align :{
        fontSize : 14,
        flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    gap:6,
    fontFamily:'Thonburi',
    color:'white'
      },
})