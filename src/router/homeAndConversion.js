import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ConversionRateByProducts from '../screens/conversionRateByProducts'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator initialRouteName='HOME'>
      <Stack.Screen
        name='HOME'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='CONVERSION_RATE_BY_PRODUCT'
        component={ConversionRateByProducts}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
