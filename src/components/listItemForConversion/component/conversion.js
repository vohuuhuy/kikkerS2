import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    marginTop: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1
  },
  title: {
    fontSize: 18
  },
  containerTextIcon: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  count: {
    marginRight: 15,
    fontWeight: 'bold',
    fontSize: 22
  },
  containerIcon: {
    justifyContent: 'flex-start'
  }
})

export default ({ title, count, iconName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerTextIcon}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.containerIcon}>
          <MaterialCommunityIcons name={iconName} size={20} color={'black'} />
        </View>
      </View>
    </View>
  )
}
