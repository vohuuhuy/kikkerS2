import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native'

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: 'rgba(20, 15, 38, 0.6)',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    color: '#FFFFFF',
    padding: 10,
    width: '90%'
  },
  iconContainerEmail: {
    backgroundColor: 'green',
    marginRight: 6,
    borderRadius: 8
  },
  iconContainerPass: {
    marginRight: 6
  },
  icon: {
    padding: 5
  }
})

export default ({ placeHolderName, keyboardType, autoFocus, onChangeText, Icon, isPass }) => {
  const [iconName, setIconName] = useState('eye')

  const changeIcon = () => {
    if (isPass) {
      setIconName((pre) => (pre === 'eye' ? 'eye-off' : 'eye'))
    }
  }

  return (
    <View style={styles.inputField}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={placeHolderName}
        placeholderTextColor="gray"
        autoCapitalize="none"
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        onChangeText={(value) => onChangeText(value, isPass)}
        secureTextEntry={iconName === 'eye' ? true : false}
      />
      <TouchableOpacity
        style={isPass ? styles.iconContainerPass : styles.iconContainerEmail}>
        <Icon
          size={16}
          color={isPass ? 'rgba(108, 123, 138, 1)' : '#fff'}
          style={styles.icon}
          name={isPass ? iconName : 'check'}
          onPress={changeIcon}
        />
      </TouchableOpacity>
    </View>
  )
}
