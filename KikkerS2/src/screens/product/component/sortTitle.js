import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 15
  },
  flatListContainer: {
    backgroundColor: '#ffffff',
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: 65,
    zIndex: 5,
    elevation: 5
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingLeft: 10,
    justifyContent: 'space-between',
    width: '60%'
  }
})

export default ({ textChoose, isShow, changeIsShow }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sort by</Text>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => changeIsShow()}
      >
        <Text style={styles.text}>
          {textChoose}
        </Text>
        <TouchableWithoutFeedback onPress={handleBtn}>
          <MaterialIcons
            name={isShow ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={30}
            color={'black'}
          />
        </TouchableWithoutFeedback>
      </TouchableOpacity>
      <View style={styles.row}>
        <AntDesign
          name='arrowdown'
          color={'black'}
          size={20}
        />
        <AntDesign
          name='arrowup'
          color={'gray'}
          size={20}
        />
      </View>
    </View>
  )
}
