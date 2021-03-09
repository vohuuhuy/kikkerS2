import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListConversion from './listConversion'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15
  },
  containerImage: {
    flexDirection: 'row',
    paddingTop: 20
  },
  textName: {
    maxWidth: 200
  }
})

export default ({ data }) => {
  const listConversion = {
    conversionRate: data.conversionRate,
    viewProducts: data.viewProducts,
    addToCart: data.addToCart,
    checkout: data.checkout,
    purchase: data.purchase,
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.containerName}>
          <Text style={styles.textName}>{data.name}</Text>
          <MaterialCommunityIcons
            name="eye-outline"
            size={16}
            color={'black'}
          />
        </View>
      </View>
      <ListConversion data={listConversion} />
    </View>
  )
}
