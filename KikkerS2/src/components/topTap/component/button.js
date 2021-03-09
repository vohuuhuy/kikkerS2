import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { width_screen } from '../../../util'


const styles = StyleSheet.create({
  buttonActive: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    backgroundColor: '#ffffff',
    height: (1 / 8) * width_screen,
    justifyContent: 'center'
  },
  buttonInActive: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: (1 / 8) * width_screen,
    justifyContent: 'center'
  },
  textAcive: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInActive: {
    color: '#6C7B8A',
    textAlign: 'center'
  }
})

export default ({ title, titleActive, changeTab }) => {
  const isActive = title === titleActive

  return (
    <TouchableOpacity
      style={isActive ? styles.buttonActive : styles.buttonInActive}
      onPress={() => changeTab(title)}>
      <Text style={isActive ? styles.textAcive : styles.textInActive}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
