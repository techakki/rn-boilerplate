import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PLP from '../screens/PLP';
import PDP from '../screens/PDP';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PLP" component={PLP} />
      <Stack.Screen name="PDP" component={PDP} />
    </Stack.Navigator>
  );
}
