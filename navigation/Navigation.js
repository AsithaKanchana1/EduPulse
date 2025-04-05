import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import EligibilityChecker from '../screens/EligibilityChecker';

import PaymentScreen from '../screens/PaymentScreen';
import NewsScreen from '../screens/NewsScreen';
import UpdatesScreen from '../screens/UpdatesScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="EligibilityChecker" component={EligibilityChecker} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Updates" component={UpdatesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
