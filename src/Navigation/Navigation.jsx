import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Account from '../Screens/Account'
import Pokedex from '../Screens/Pokedex'
import Favorites from '../Screens/Favorites'

export default function Navigation() {
    const Tab = createBottomTabNavigator()
    function renderPokeballIcon () {
      return(
        <Image 
          source={require('../assets/pokeball.png')}
          style={{width: 75, height: 75, top:-15}}/>
      )
    }

  return (
    <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Tab.Screen 
          name='Favorites' 
          component={Favorites} 
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color,size }) => (
              <Icon name='heart' color={color} size={size}/>
            )
          }}/>

        <Tab.Screen 
          name='Pokedex' 
          component={Pokedex}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              renderPokeballIcon()
            )
          }}/>

        <Tab.Screen 
          name='Account' 
          component={Account}
          options={{
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: ({color, size}) => (
              <Icon name='user' color={color} size={size}/>
            )
          }}/>
    </Tab.Navigator>
  )
}