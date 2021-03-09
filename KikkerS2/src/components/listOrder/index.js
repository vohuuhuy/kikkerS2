import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ItemOrder from './component/itemOrder'
import { dataOrder } from '../../util'

export default () => {
  return (
    <FlatList
      data={dataOrder}
      renderItem={({ item }) => <ItemOrder data={item} />}
      keyExtractor={item => item.codeOrder}
    />
  )
}
