import React from 'react'
import { FlatList } from 'react-native'
import { dataProductTemplate, dataProduct } from '../../../util'
import Conversion from './conversion'

export default ({ data = dataProduct }) => {
  const renderItemConversion = ({ item }) => {
    return (
      <Conversion
        title={item.title}
        count={
          item.id === 'conversionRate' ? `${data[item.id]}%` : data[item.id]
        }
        iconName={item.iconName}
      />
    )
  }

  return (
    <FlatList
      data={dataProductTemplate}
      keyExtractor={item => item.id}
      renderItem={renderItemConversion}
    />
  )
}
