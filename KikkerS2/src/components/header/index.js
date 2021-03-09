import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import CenterHeader from './component/center'
import LeftHeader from './component/left'
import RightHeader from './component/right'
import DropDown from './component/dropdown'
import { dataHeaderDropdown, width_screen } from '../../util'

const styles = StyleSheet.create({
  container: {
    height: (24 / 100) * width_screen,
    backgroundColor: '#145387'
  }
})

export default ({
  date,
  textChoose,
  onChangeTextChoose,
  Left = null,
  Right = null,
  Center = null
}) => {
  const [isShow, setIsShow] = useState(false)

  const onReceiveIsShow = (isShow) => setIsShow(isShow)

  const changeText = (value) => {
    if (typeof onChangeTextChoose === 'function') {
      onChangeTextChoose(value)
    }
    setIsShow(false)
  }

  return (
    <>
      <Header
        centerComponent={
          Center ? (
            <Center />
          ) : (
            <CenterHeader
              onReceiveIsShow={onReceiveIsShow}
              isShow={isShow}
              textChoose={textChoose}
              date={date}
            />
          )
        }
        leftComponent={Left ? <Left /> : <LeftHeader />}
        rightComponent={Right ? <Right /> : <RightHeader />}
        containerStyle={styles.container}
      />
      {
        isShow
        && (
          <DropDown
            textChoose={textChoose}
            data={dataHeaderDropdown}
            onChangeText={changeText}
          />
        )
      }
    </>
  )
}
