import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ButtonSetting from './component/buttonSetting'
import Header from '../../components/header'

const styles = StyleSheet.create({
  textHeader: {
    color: '#ffffff',
    fontSize: 20
  }
})

export default () => {
  const navigation = useNavigation()

  const onhandle = (key) => {
    switch (key) {
      case 'Logout':
        navigation.replace('LOGINPAGE')
        AsyncStorage.clear()
    }
  }

  return (
    <SafeAreaView>
      <Header
        Center={() => <Text style={styles.textHeader}>SETTING</Text>}
        Left={() => <View />}
        Right={() => <View />}
      />
      <ButtonSetting
        title='Push Notification'
        iconName='navigate-next'
      />
      <ButtonSetting
        title='Language'
        iconName='navigate-next'
      />
      <ButtonSetting
        title='Logout'
        noIcon={true}
        onhandle={onhandle}
      />
    </SafeAreaView>
  )
}
