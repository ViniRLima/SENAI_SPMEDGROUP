import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


export default function Login( { navigation }) {

  const [OpenV, SetVis] = useState(true)

  const [dataLogin, setDataLogin] = useState({
    Email: '',
    Senha: ''
});
  const [statusResponse, setStatusResponse] = useState('200')

  async function fazerLogin() {
    try {

      const response = await api.post('/Login', dataLogin)
      console.log(response.data.token)

      setStatusResponse('200')

      await AsyncStorage.setItem('@jwt', response.data.token);
      

      navigation.navigate("Listagem") 

    } catch (error) {
      setStatusResponse('404')
    }
     
}


  return (
    
    
    <View>

            <ImageBackground
            source={require('../../assets/img/background.png')}
            style={styles.FundoTela}
            >

<View style={styles.Main}>

        <View>
            <Image
              source={require('../../assets/img/logo.png')}
              style={styles.LogoSpMedGroup}
            ></Image>
        </View> 

    <View style={styles.BlocoInput}>
        <TextInput
          placeholderTextColor="#000000"
          style={styles.LoginSenhaInput}
          placeholder='Login :'
          value={dataLogin.Email}
          onChangeText={text => setDataLogin({
            ...dataLogin,
            Email: text
        })}        />

        <TextInput
          placeholderTextColor="#000000"
          style={styles.LoginSenhaInput}
          placeholder='Senha :'
          value={dataLogin.Senha}
          onChangeText={text => setDataLogin({
            ...dataLogin,
            Senha: text
        })}
        />

        <TouchableOpacity
      onPress={() => fazerLogin()}
      style={styles.BotaoLogin}>
      <Text style={{ color: '#00CED1', fontSize:13}}>Login</Text>
         </TouchableOpacity>

    </View>

</View>

        </ImageBackground>
    </View>
  );


  }
  // Folha de Estilo
  const styles = StyleSheet.create({

//Bloco BackGround
    //Imagem de Fundo
    FundoTela: {
        width:'100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
                },

//Bloco Main (Logo e Input)
Main: {
    width:350,
    height:420,
    marginBottom:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
    //Logo SpMedGroup
    LogoSpMedGroup: {
        width:  300,
        height: 300,
      },
    //Bloco Input
    BlocoInput:{
        marginBottom:100,
        alignItems: 'center',
        borderColor:'#000000',
      },
    //Input Login e Senha
    LoginSenhaInput:{
        borderWidth:2,
        width: 300,
        marginBottom:10,
        borderRadius: 20,
        opacity:0.5,
        paddingLeft: 15,
        backgroundColor:'#d3d3d3',
        fontSize:20, 
    },

    //Botão Login
    BotaoLogin:{
        width:200,
        height:50,
        padding:15,
        borderColor:'#00CED1',
        borderWidth:2,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
  });
