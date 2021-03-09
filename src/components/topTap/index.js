import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './component/button'
import { toptapTitles } from '../../util'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default ({titleActive, chooseTab}) => {
  return (
    <View style={styles.container}>
      {toptapTitles.map((e) => (
        <Button
          title={e.title}
          changeTab={value => chooseTab(value)}
          titleActive={titleActive}
          key={e.id}
        />
      ))}
    </View>
  )
}
