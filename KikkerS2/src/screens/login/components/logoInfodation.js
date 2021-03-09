import React from 'react'
import { StyleSheet,  View, Image } from 'react-native'
import { width_screen } from '../../../util'

const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.75,
    alignItems: 'center'
  },
  logo: {
    width: (2 / 3) * width_screen,
    height: (2 / 3) * width_screen
  }
})

export default () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../assets/image/InfomationLogo.png')}
        resizeMode={'center'}
        style={styles.logo}
      />
    </View>
  )
}
