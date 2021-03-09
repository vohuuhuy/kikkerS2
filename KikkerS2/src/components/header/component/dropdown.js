import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: 170,
    alignSelf: 'center',
    top: 68,
    position: 'absolute',
    elevation: 5,
    zIndex: 5,
  },
  itemContainer: {
    padding: 5,
    margin: 5,
    borderBottomColor: '#6C7B8A',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  circleOut: {
    borderRadius: 10,
    height: 20,
    width: 20,
    marginRight: 10,
    borderColor: '#DAE1E9',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIn: {
    borderRadius: 10,
    height: 7,
    width: 7,
    borderColor: '#DAE1E9',
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
  },
})

export default ({ data, textChoose, onChangeText }) => {
  const renderItem = ({item}) => {
    const changeTextChoose = (value) => {
      onChangeText(value)
    }

    const check = textChoose === item.title

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPressIn={() => changeTextChoose(item.title)}>
        <View
          style={[
            styles.circleOut,
            {backgroundColor: check ? '#942925' : '#ffffff'},
          ]}>
          {check ? <View style={styles.circleIn} /> : null}
        </View>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id + ''}
      />
    </View>
  )
}
