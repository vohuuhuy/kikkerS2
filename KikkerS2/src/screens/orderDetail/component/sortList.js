import React from 'react'
import { StyleSheet, View } from 'react-native'
import SortItem from './sortItem'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    elevation: 1,
    zIndex: 1,
    position: 'absolute',
    top: 85,
    width: '100%',
    padding: 5
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <SortItem
        data={[{title: 'Customer Name A-Z'}, {title: 'Customer Name Z-A'}]}
        defaultValue='Customer Name A-Z'
        field='ORDER BY'
      />
      <SortItem
        data={[{title: 'Capture'}, {title: 'UnCapture'}]}
        defaultValue='Capture'
        field='STATUS'
      />
    </View>
  )
}
