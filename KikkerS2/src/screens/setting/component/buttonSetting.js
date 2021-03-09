import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomColor: 'gray',
    borderWidth: 0.2,
    alignItems: 'center'
  },
  text: {
    fontSize: 15
  },
  textNoIcon: {
    color: 'red',
    paddingVertical: 5,
    fontSize: 15
  }
})

export default ({ title, iconName, noIcon = false, onhandle }) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onhandle(title)}
    >
      <Text style={noIcon ? styles.textNoIcon : styles.text}>
        {title}
      </Text>
      {
        !noIcon
        && (
          <MaterialIcons
            name={iconName}
            size={30}
            color={'black'}
          />
        )
      }
    </TouchableOpacity>
  )
}
