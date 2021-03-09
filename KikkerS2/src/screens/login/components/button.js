import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#145387',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ({ gotoMain, children, status }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={status}
        style={styles.button}
        onPress={gotoMain}
      >
        {children}
      </TouchableOpacity>
    </View>
  )
}
