import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import Router from './src/router'

export default () => {
  return (
    <NavigationContainer independent={true}>
      <Router />
    </NavigationContainer>
  )
}
