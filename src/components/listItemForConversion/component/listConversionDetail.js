import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ConversionDetail from './conversionDetail'
import { dataConversionRate } from '../../../util'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataConversionRate}
        renderItem={({ item }) => <ConversionDetail data={item} />}
        keyExtractor={item => item.id + ''}
      />
    </View>
  )
}
