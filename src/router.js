import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home'
import Detail from './pages/detail'

const Stack = createStackNavigator()


export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Home'
            component={Home}
            options={{ headerShown: false }} // Tira o header padrão
            />
            <Stack.Screen 
            name='Detail'
            component={Detail}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}