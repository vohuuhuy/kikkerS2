import React, { useEffect, useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import LogoInfodation from './components/logoInfodation'
import FormLogin from './components/formLogin'

const BACKGROUND_COLOR_LOGIN = '../../assets/image/background_color_login.png'
const LOGIN_BACKGROUND = '../../assets/image/login_background.png'

const styles = StyleSheet.create({
  imagebackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
  }
})

export default () => {
  const [isShow, setIsShow] = useState(false)
  const navigation = useNavigation()

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('TOKEN')
      if (value) {
        setIsShow(false)
        navigation.replace('MAIN')
      } else {
        setIsShow(true)
      }
    } catch (e) {}
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <SafeAreaView>
      {
        isShow
        && (
          <ImageBackground
            style={styles.imagebackground}
            source={require(BACKGROUND_COLOR_LOGIN)}
            resizeMode={'cover'}
          >
            <ImageBackground
              style={styles.imagebackground}
              source={require(LOGIN_BACKGROUND)}
              resizeMode={'cover'}
            >
              <LogoInfodation />
              <FormLogin />
            </ImageBackground>
          </ImageBackground>
        )
      }
    </SafeAreaView>
  )
}
