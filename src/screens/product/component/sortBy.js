import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Dropdown from './dropdown'
import SortTitle from './sortTitle'
import { dataSortByProduct } from '../../../util'

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: '#ffffff',
    zIndex: 5,
    elevation: 5,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: '50%',
  }
})

export default () => {
  const [isShow, setIsShow] = useState(false)
  const [textChoose, setTextChoose] = useState('View Products')

  const changeIsShow = () => setIsShow((pre) => !pre)

  const renderItem = ({ item }) => {
    const onChooseItem = item => {
      setTextChoose(item.value)
      changeIsShow()
    }

    const check = textChoose.toLowerCase() === item.title.toLowerCase()

    return (
      <Dropdown
        check={check}
        item={item}
        onChooseItem={onChooseItem}
      />
    )
  }

  return (
    <View>
      <SortTitle
        textChoose={textChoose}
        isShow={isShow}
        changeIsShow={changeIsShow}
      />
      {
        isShow
        && (
          <View style={styles.flatListContainer}>
            <FlatList
              data={dataSortByProduct}
              renderItem={renderItem}
              keyExtractor={item => item.id + ''}
            />
          </View>
        )
      }
    </View>
  )
}
