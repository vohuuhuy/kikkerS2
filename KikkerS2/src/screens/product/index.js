import React, { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../../components/header'
import SortByComponent from './component/sortBy'
import ListProduct from './component/listProduct'

export default () => {
  const [textChoose, setTextChoose] = useState('BOOBEE')

  return (
    <SafeAreaProvider>
      <Header
        Left={() => <View />}
        Right={() => <View />}
        textChoose={textChoose}
        date=''
        onChangeTextChoose={value => setTextChoose(value)}
      />
      <SortByComponent />
      <ListProduct />
    </SafeAreaProvider>
  )
}
