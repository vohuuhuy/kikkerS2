import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { titleOrder } from '../../../util'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15
  },
  order: {
    color: '#145387',
    fontWeight: '500',
    fontSize: 20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  text: {
    color: 'rgba(108, 123, 138, 1)'
  },
  status: {
    width: 100,
    padding: 2,
    borderRadius: 7
  },
  textStatus: {
    textAlign: 'center',
    color: '#ffffff'
  },
  createAt: {
    color: 'rgba(20, 15, 38, 1)',
    fontWeight: 'bold'
  }
})

export default ({ data }) => {
  const renderItem = ({item}) => {
    let styleTitle = styles.text
    let styleValue = styles.text
    let backgroundView = null
    switch (item.id) {
      case 'createAt':
        styleTitle = styles.createAt
        styleValue = styles.createAt
        break
      case 'orderStatus':
        styleTitle = styles.createAt
        styleValue = styles.textStatus
        backgroundView = [
          styles.status,
          data[item.id] === 'Proceesing'
            ? {backgroundColor: '#B69329'}
            : data[item.id] === 'Failure'
            ? {backgroundColor: 'red'}
            : {backgroundColor: 'green'},
        ]
        break
      case 'paymentStatus':
        styleValue = styles.textStatus
        backgroundView = [
          styles.status,
          data[item.id] === 'Uncapture'
            ? {backgroundColor: '#C43D4B'}
            : {backgroundColor: 'green'},
        ]
        break
      default:
        break
    }
    return (
      <Item
        title={item.title}
        value={data[item.id]}
        styleTitle={styleTitle}
        styleValue={styleValue}
        backgroundView={backgroundView}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.order}>Order #: {data.codeOrder}</Text>
      <FlatList
        data={titleOrder}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const Item = ({ title, value, styleTitle, styleValue, backgroundView }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styleTitle}>{title}:</Text>
      <View style={backgroundView}>
        <Text style={styleValue}>{value}</Text>
      </View>
    </View>
  )
}
