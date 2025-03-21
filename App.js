import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Rotas from './components/Rotas'
import Home from './components/Home'
import Livro from './components/Livro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Livro" component={Livro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

