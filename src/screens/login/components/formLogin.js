import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, StyleSheet, Keyboard, Alert } from 'react-native'
import InputLogin from './InputLogin'
import Button from './button'
import Line from './line'
import { validateEmail } from '../../../util'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 15
  }
})

export default () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errEmail, setErrEmail] = useState(false)

  const navigation = useNavigation()

  const onChangeText = (value, isPass) => {
    if (isPass) {
      setPass(value)
    } else {
      if (validateEmail(value)) {
        setEmail(value)
        setErrEmail(true)
      } else {
        setErrEmail(false)
      }
    }
  }

  const gotoMain = () => {
    Keyboard.dismiss()
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: pass,
      })
      .then(res => {
        if (res.status === 200) {
          storeData(res.data.token)
          navigation.navigate('MAIN')
        }
      })
      .catch((err) => {
        Alert.alert('ERROR', 'Your Acount incorrect!')
      })
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('TOKEN', value)
    } catch (e) {}
  }

  return (
    <View style={styles.container}>
      <InputLogin
        placeHolderName='Email'
        keyboardType='email-address'
        autoFocus={true}
        onChangeText={onChangeText}
        Icon={(props) => (errEmail ? <AntDesign {...props} /> : null)}
        isPass={false}
      />
      <InputLogin
        placeHolderName='Password'
        keyboardType='default'
        autoFocus={false}
        onChangeText={onChangeText}
        Icon={(props) => <Feather {...props} />}
        isPass={true}
      />
      <Button gotoMain={gotoMain} status={!errEmail || pass === ''}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Button>
      <Line />
      <Button gotoMain={gotoMain}>
        <AntDesign
          name='qrcode'
          size={30}
          color={'black'}
        />
        <Text style={styles.buttonText}>SCAN QR CODE</Text>
      </Button>
    </View>
  )
}
