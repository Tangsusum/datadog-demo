/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckoutScreen from './components/screens/CheckoutScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import HomeIcon from './assests/HomeIcon';
import CartIcon from './assests/CartIcon';
import PersonIcon from './assests/PersonIcon';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#632ca6',
      }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <HomeIcon color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Shopping Cart" 
          component={CheckoutScreen} 
          options={{
            tabBarLabel: 'Shopping Cart',
            tabBarIcon: ({ color }) => (
              <CartIcon color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <PersonIcon color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
