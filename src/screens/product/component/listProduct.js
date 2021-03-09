import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Product from './product'
import { dataItemProduct } from '../../../util'

export default () => {
  return (
    <FlatList
      data={dataItemProduct}
      renderItem={({ item }) => (
        <Product
          imageUri={item.imageUri}
          productName={item.productName}
          personal={item.personal}
          status={item.status}
          website={item.website}
        />
      )}
      keyExtractor={item => item.id + ''}
    />
  )
}
