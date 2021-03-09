import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 250,
    borderWidth: 0.5,
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: 5,
    backgroundColor: '#ffffff'
  },
  flatListContainer: {
    backgroundColor: '#ffffff',
    width: 250,
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 5,
    elevation: 5,
    padding: 10,
    top: 40,
    right: 10
  },
  text: {
    alignSelf: 'center'
  }
})

export default ({ field, defaultValue, data }) => {
  const [isShow, setIsShow] = useState(false)
  const [textChoose, setTextChoose] = useState('' + defaultValue)

  const changeIsShow = () => {
    setIsShow((pre) => !pre)
  }

  const onChooseItem = (item) => {
    setTextChoose(item.title)
    changeIsShow()
  }

  return (
    <View>
      <View style={styles.row}>
        <Text>{field}</Text>
        <TouchableOpacity
          style={styles.dropdownContainer}
          onPress={changeIsShow}>
          <Text style={styles.text}>{textChoose}</Text>
          <TouchableOpacity onPress={changeIsShow}>
            <MaterialIcons
              name={isShow ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      {
        isShow
        && (
          <View style={styles.flatListContainer}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{margin: 5}}
                  onPressIn={() => onChooseItem(item)}>
                  <Text style={{fontSize: 15}}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.title}
            />
          </View>
        )
      }
    </View>
  )
}
