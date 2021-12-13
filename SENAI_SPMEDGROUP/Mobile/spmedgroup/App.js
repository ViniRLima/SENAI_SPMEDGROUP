import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './src/screens/login.js'
import listagem from './src/screens/listagem.js'

const AuthStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
        <AuthStack.Navigator
          headerMode = 'none'
        >

        <AuthStack.Screen name = 'Login' component={login} />
        <AuthStack.Screen name = 'Listagem' component={listagem} />

    </AuthStack.Navigator>
  </NavigationContainer>
  );
}