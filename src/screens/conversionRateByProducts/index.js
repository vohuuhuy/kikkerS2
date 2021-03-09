import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Header from '../../components/header'
import TopTap from '../../components/topTap'
import ListItemForConversion from '../../components/listItemForConversion'
import { getDate } from '../../util'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => {
  const route = useRoute()

  const [titleActive, setTitleActive] = useState(route.params.titleActive)
  const [textChoose, setTextChoose] = useState(route.params.textChoose)

  const chooseTab = (value) => {
    setTitleActive(value)
    getDate(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        date={getDate(titleActive)}
        onChangeTextChoose={value => setTextChoose(value)}
        textChoose={textChoose}
      />
      <TopTap titleActive={titleActive} chooseTab={chooseTab} />
      <ListItemForConversion isList={true} />
    </SafeAreaView>
  )
}
