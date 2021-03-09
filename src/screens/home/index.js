import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TopTap from '../../components/topTap'
import ConversionRate from '../../components/conversionRate'
import ListItemForConversion from '../../components/listItemForConversion'
import Header from '../../components/header'
import { getDate } from '../../util'

export default () => {
  const [titleActive, setTitleActive] = useState('YESTERDAY')
  const [textChoose, setTextChoose] = useState('BOOBEE')

  const chooseTab = (value) => setTitleActive(value)

  const navigation = useNavigation()

  const goToConversionRate = () => navigation.navigate('CONVERSION_RATE_BY_PRODUCT', {
    date: getDate(titleActive),
    titleActive: titleActive,
    textChoose: textChoose,
  })

  return (
    <SafeAreaView>
      <Header
        date={getDate(titleActive)}
        onChangeTextChoose={value => setTextChoose(value)}
        textChoose={textChoose}
        Left={() => <View />}
        Right={() => <View />}
      />
      <TopTap titleActive={titleActive} chooseTab={chooseTab} />
      <ConversionRate
        title="Conversion Rate By Products"
        handleGoToNextScreen={goToConversionRate}
        iconName="keyboard-arrow-right"
      />
      <ListItemForConversion />
    </SafeAreaView>
  )
}
