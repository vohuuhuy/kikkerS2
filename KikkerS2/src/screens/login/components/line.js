import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  lineContainer: {
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  view1: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: 50
  },
  view2: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  },
  view3: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: 50
  }
})

export default () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.view1} />
      <Text style={styles.view2}>OR</Text>
      <View style={styles.view3} />
    </View>
  )
}
