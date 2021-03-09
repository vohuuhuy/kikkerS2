import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Order from '../screens/order'
import OrderDetail from '../screens/orderDetail'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator initialRouteName='HOME'>
      <Stack.Screen
        name='ORDER'
        component={Order}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Order_Detail'
        component={OrderDetail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
