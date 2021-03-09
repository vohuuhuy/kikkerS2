import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name='LOGINPAGE'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='MAIN'
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
