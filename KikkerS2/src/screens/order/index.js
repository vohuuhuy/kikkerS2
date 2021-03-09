import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, SafeAreaView } from 'react-native'
import Header from '../../components/header'
import ConversionRate from '../../components/conversionRate'
import ListOrder from '../../components/listOrder'

export default () => {
  const navigation = useNavigation()
  const [textChoose, setTextChoose] = useState('BOOBEE')

  return (
    <SafeAreaView>
      <Header
        onChangeTextChoose={value => setTextChoose(value)}
        Left={() => <View />}
        Right={() => <View />}
        textChoose={textChoose}
        date=''
      />
      <ConversionRate
        handleGoToNextScreen={() => navigation.navigate('Order_Detail', { textChoose })}
        sizeIcon={18}
        iconName='vpn-key'
        title='Display Options'
      />
      <ListOrder />
    </SafeAreaView>
  )
}
