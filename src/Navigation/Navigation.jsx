import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from '../Screens/Account'
import Favorites from '../Screens/Favorites'
import Pokedex from '../Screens/Pokedex'

export default function Navigation() {
    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
        <Tab.Screen name='Pokedex' component={Pokedex}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
        <Tab.Screen name='Account' component={Account}/>
    </Tab.Navigator>
  )
}