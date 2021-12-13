import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Mdal, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Listagem({navigation}) {

    const [Lista, SetLista] = useState([]);
  
    const [tipo, setTipo] = useState('');
  
  
  
  
    async function deslogar() {
      AsyncStorage.removeItem('@jwt')
  
      navigation.navigate('Login')
    }
  
    async function fazerLogin() {
  
  
      const TokenValor =  await AsyncStorage.getItem('@jwt')
      setTipo(jwtDecode(TokenValor).nameid);
      
    
  
    
  
   
     if(tipo === '3'){
  
       const resposta = await api.get('/Consultum/ConsultasPacientesRelacionada', {
        headers: {
          'Authorization': `Bearer  ${TokenValor}`
        }
      })
  
      console.log(resposta.data)
      SetLista(resposta.data);
  
     }else if(tipo === '2'){
  
      const resposta = await api.get('/Consultum/ConsultasMedicosRelacionada', {
        headers: {
          'Authorization': `Bearer  ${TokenValor}`
        }
      })
  
      console.log(resposta.data)
      SetLista(resposta.data);
     }
   
  
      
   }
  
    useEffect(() =>{
      fazerLogin()
  
    }, [tipo])



    return (
    
    
        <View style={styles.FundoTela}>
        
        <View style={styles.BlocoInfo}>
                    <Image
                      source={require('../../assets/img/logo.png')}
                      style={styles.LogoSpMedGroup}
                    ></Image>
        
            <View style={styles.BlocoConf}>
                <Text style={styles.BotaoInfo}>Usuario</Text>
                <Text style={styles.BotaoInfo}>Configurações</Text>
                <Text style={styles.BotaoInfo}>Sair</Text>
            </View>
        </View>
        
                  
          
        <Text style={styles.TextConsul}>Consultas</Text>
        {
        Lista.map(i =>{
                return(
                  <View style={styles.BlocoConsulta}>
        
        <View> 
          <Text style={{marginLeft: 12}}><Text style={{color: '#1858F2', fontWeight: 'bold'}}> {tipo === "3" ? 'Medico : ' : 'Paciente : '}</Text> {tipo === "3" ? i.idMedicoNavigation.nomeMedico : i.idPacienteNavigation.nomePaciente}</Text>              
                        </View>
                        <View style={{flexDirection:'row', marginTop:15}}>
                         <Text> 
                         {Intl.DateTimeFormat('pt-BR').format(new Date(i.dataConsulta))} <Text style={i.idSituacaoNavigation.situacao1 === "Realizada" ? {color: '#3CB371', fontWeight: 'bold', fontSize:18} : i.idSituacaoNavigation.situacao1 === "Agendada" ? {color: '#E6D433', fontWeight: 'bold', fontSize:18} : {color: 'red', fontWeight: 'bold', fontSize:18}}>{i.idSituacaoNavigation.situacao1}</Text>             
                          </Text>                                            
                        </View> 
                        <View style={{marginTop: 15}}> 
                          <Text style={{fontSize:14}}>Descrição: <Text style={{fontSize:12}}>{i.descricao}</Text></Text>
                        </View>
        
                  </View>
           )
          }    
          )
        }
           
        
            <TouchableOpacity
              onPress={() => fazerLogin()}
              style={styles.BotaoListar}>
              <Text style={styles.TextBotaoListar}>Listar</Text>
                 </TouchableOpacity>
        
         </View>
        
        
          );
        
        
          }
          // Folha de Estilo
          const styles = StyleSheet.create({
        
        //Bloco BackGround
            //Fundo de Tela
            FundoTela: {
        
              width:'100%',
              height: '100%',
              backgroundColor:'#87CEFA'
                        },
        
        //Informações
        BlocoInfo:{
          width:  400,
          height: 150,
          /*borderColor:'#000000',
          borderWidth:2,*/
          flexDirection:'row',
        },
            //Logo SpMedGroup
            LogoSpMedGroup: {
              width:  200,
              height: 200,
              /*borderColor:'#000000',
              borderWidth:2,*/
            },
        
            //Bloco de Configurações
            BlocoConf:{
              width:  200,
              height: 100,
              marginTop:50,
              marginBottom:50,
              /*borderColor:'#000000',
              borderWidth:2,*/
            },
            //Botões (Usuario, Minha Conta e Configurações)
            BotaoInfo:{
              color:'#000000',    
              fontSize:20,
            },
        
        
        
        //Bloco Consulta
        BlocoConsulta: {
          backgroundColor:'#d3d3d3',
          borderRadius:60,
            width:350,
            height:350,
            marginBottom:20,
            marginTop:20,
            margin:20,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:'#000000',
         borderWidth:2,
          },
        
          //Texto Consulta
          TextConsul:{
        marginLeft:150,
        marginRight:150,
        marginTop:20,
        fontSize:20,
        color:'#000000',
          },
        
        // Botão Listar
          BotaoListar:{
                width:200,
                height:50,
                borderWidth:2,
                borderRadius:20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight:100,
                marginLeft:100,
                borderColor:'#000000',
            },
        
            TextBotaoListar:{
              color: '#000000',
               fontSize:20,
            }
          
          });
        