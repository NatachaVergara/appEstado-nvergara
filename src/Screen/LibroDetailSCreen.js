import React from 'react'
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const LibroDetailSCreen = ({ route }) => {
  const { libro } = route.params


  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imgTitle}>
          <Image source={{ uri: libro.url }} style={{ width: 150, height: 200 }} />
          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}> {libro.titulo} </Text>
            <Text style={styles.titulo}> {libro.subTitulo} </Text>
          </View>
        </View>

        <Text style={styles.sinopsis}>{libro.sinopsis} </Text>
        <View style={styles.precioContainer}>
          <Text style={styles.precio} > ${libro.precio} </Text>
        </View>

      <View style={styles.diponibleContainer}>
      <Text style={libro.stock <= 0 ? styles.noStock : null}> Stock: {libro.stock <= 0 ? 'Fuera de Stock' : libro.stock}  </Text>
      </View>

        <View style={styles.buttons}>
          <Button title={'volver'} />
          <Button title={'Agregar'} />
        </View>
      </ScrollView>
    </SafeAreaView >

  )
}

export default LibroDetailSCreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  imgTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tituloContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',

  },
  titulo: {
    fontSize: 15,
    fontFamily: 'CormorantSCBold',
    justifyContent: 'center',
    alignItems: 'center',

  },
  sinopsis: {
    padding: 20,
    fontFamily: 'SemiBold'
  },
  precioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  precio: {
    fontSize: 20,
  },
  noStock:{
    color:'red'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    alignItems: 'center',
    margin: 20
  }
})