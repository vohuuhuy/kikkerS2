import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#1C162E'
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    fontWeight: '500'
  },
  statusContainer: {
    backgroundColor: '#145388',
    width: 70,
    borderRadius: 10
  },
  imageStyle: {
    height: 100,
    width: 100
  },
  icon: {
    marginLeft: 10
  },
  containerItemText: {
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row'
  },
  status: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10
  }
})

export default ({imageUri, productName, personal, website, status}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.text}>{productName}</Text>
          <View style={styles.row}>
            <Text>{personal}</Text>
            <Feather name={'eye'} size={16} color="black" style={styles.icon} />
          </View>
        </View>
      </View>

      <View style={styles.containerItemText}>
        <Text>Website:</Text>
        <Text>{website}</Text>
      </View>

      <View style={styles.containerItemText}>
        <Text>Status:</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </View>
  )
}
