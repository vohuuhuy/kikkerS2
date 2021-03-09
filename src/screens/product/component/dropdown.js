import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    margin: 5
  },
  borderItemOut: {
    borderRadius: 10,
    height: 20,
    width: 20,
    marginRight: 10,
    borderColor: '#DAE1E9',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderItemIn: {
    borderRadius: 10,
    height: 10,
    width: 10,
    borderColor: '#DAE1E9',
    borderWidth: 1.5,
    backgroundColor: '#ffffff'
  }
})

export default ({item, check, onChooseItem}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPressIn={() => onChooseItem(item)}
    >
      <View style={styles.borderItemOut}>
        {
          check
          && (
            <View
              style={[
                styles.borderItemIn,
                { backgroundColor: '#942925' }
              ]}
            />
          )
        }
      </View>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}
