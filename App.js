import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from './src/scan'
import Scanner from './src/Scanner'
import ItemDetail from './src/ItemDetail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}>
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


