import React from 'react'
import { Image, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderAndOrderDetail from './orderAndOrderDetail'
import Product from '../screens/product'
import More from '../screens/more'
import Setting from '../screens/setting'
import HomeAndConversion from './homeAndConversion'
import { width_screen } from '../util'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator
      initialRouteName='HomePage_To_Conversion'
      tabBarOptions={{
        activeTintColor: '#145387',
        inactiveTintColor: '#140F26',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Order_To_Detail':
              return (
                <SimpleLineIcons name='handbag' size={size} color={color} />
              )
            case 'PRODUCT':
              return <Ionicons name='cube-outline' size={size} color={color} />
            case 'HomePage_To_Conversion':
              return (
                <Image
                  source={require('../assets/image/InfomationLogo.png')}
                  style={{
                    width: (17 / 100) * width_screen,
                    height: (17 / 100) * width_screen,
                  }}
                />
              )
            case 'SETTING':
              return (
                <Ionicons name='settings-outline' size={size} color={color} />
              )
            case 'MORE':
              return (
                <Feather name='more-horizontal' size={size} color={color} />
              )
            default:
              break
          }
        }
      })}
    >
      <Tab.Screen
        name='Order_To_Detail'
        component={OrderAndOrderDetail}
        options={{
          title: 'ORDER',
        }}
      />
      <Tab.Screen
        name='PRODUCT'
        component={Product}
      />
      <Tab.Screen
        name='HomePage_To_Conversion'
        component={HomeAndConversion}
        options={{
          tabBarLabel: () => <View />,
        }}
      />
      <Tab.Screen name='SETTING' component={Setting} />
      <Tab.Screen name='MORE' component={More} />
    </Tab.Navigator>
  )
}
