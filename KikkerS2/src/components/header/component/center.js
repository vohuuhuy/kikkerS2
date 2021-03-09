import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    alignSelf: 'center',
    marginLeft: 25
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
    alignSelf: 'center'
  }
})

export default ({ isShow, textChoose, date, onReceiveIsShow }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{textChoose}</Text>
        <TouchableOpacity onPress={() => onReceiveIsShow(!isShow)}>
          <MaterialIcons
            name={isShow ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={30}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      </View>
      {
        date
        && (
          <View>
            <Text style={styles.date}>
              {date}
            </Text>
          </View>
        )
      }
    </View>
  )
}
