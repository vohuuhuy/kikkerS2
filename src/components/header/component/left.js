import React from 'react'
import { StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <AntDesign
        name='arrowleft'
        size={25}
        color='#ffffff'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
