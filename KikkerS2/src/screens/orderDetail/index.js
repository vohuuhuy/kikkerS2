import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Header from '../../components/header'
import ConversionRate from '../../components/conversionRate'
import ListOrder from '../../components/listOrder'
import SortList from './component/sortList'

export default () => {
  const route = useRoute()
  const [textChoose, setTextChoose] = useState(route.params.textChoose)
  const [isSortShow, setIsSortShow] = useState(false)

  const onChangeTextChoose = (value) => setTextChoose(value)

  const showSortComponent = () => setIsSortShow((pre) => !pre)

  return (
    <SafeAreaView>
      <Header
        Left={() => <View />}
        Right={() => <View />}
        textChoose={textChoose}
        date=''
        onChangeTextChoose={onChangeTextChoose}
      />
      <ConversionRate
        iconName='vpn-key'
        title='Display Options'
        sizeIcon={18}
        handleGoToNextScreen={showSortComponent}>
        {
          isSortShow
          && <SortList />
        }
      </ConversionRate>
      <ListOrder />
    </SafeAreaView>
  )
}
