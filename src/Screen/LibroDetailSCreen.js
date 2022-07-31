import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'

const LibroDetailSCreen = ({ route }) => {
  const item = route.params.item

  return (

    <View style={styles.container}>
      <Text style={styles.titulo}> {item.titulo} </Text>
    </View>

  )
}

export default LibroDetailSCreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'CormorantSCBold',
    marginBottom: 10
  }
})