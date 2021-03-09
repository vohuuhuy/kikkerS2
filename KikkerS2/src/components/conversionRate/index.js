import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    marginVertical: 5,
  },
  containerIcon: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#145387',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlignVertical: 'center',
  },
})

export default ({ title, iconName, handleGoToNextScreen, sizeIcon = 30, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <Text style={styles.text}>
          {title}
        </Text>
        <TouchableOpacity
          style={styles.containerIcon}
          onPress={handleGoToNextScreen}
        >
          <MaterialIcons
            name={iconName}
            size={sizeIcon}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}
