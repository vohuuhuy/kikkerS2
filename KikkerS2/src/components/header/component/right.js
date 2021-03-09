import React from 'react'
import { StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginRight: 5
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={25} color="#ffffff" />
    </View>
  )
}
