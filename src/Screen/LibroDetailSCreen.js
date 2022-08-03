import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
//redux
import { useSelector } from 'react-redux'

import { Button, Card, Paragraph } from 'react-native-paper';

const LibroDetailSCreen = () => {
  const libro = useSelector(store => store.libros.selected)

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Card>
          <Card.Content>
            <Card.Title
              title={libro.titulo}
              subtitle={libro.subTitulo}
              titleStyle={styles.titulo}

            />

          </Card.Content>
          <View style={styles.cardCover}>
            <Card.Cover source={{ uri: libro.url }} style={styles.img} />
            <Card.Cover source={{ uri: libro.url }} style={styles.img} />
          </View>
          <Card.Content>

            <Paragraph style={styles.sinopsis}>{libro.sinopsis}</Paragraph>
            <View style={styles.precioStock}>
              <Paragraph style={styles.precio}>Precio ${libro.precio}</Paragraph>
              <Paragraph style={libro.stock <= 0 ? styles.noStock : styles.stock}> {libro.stock <= 0 ? 'Fuera de Stock' : "Stock: " + libro.stock} </Paragraph>
            </View>

          </Card.Content>
          <Card.Actions
            style={styles.buttons}
          >
            <Button>Volver</Button>
            <Button disabled={libro.stock <= 0 ? true : false}>Agregar</Button>
          </Card.Actions>
        </Card>





        {/* <View style={styles.imgTitle}>
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
          <Button title={'volver'}  />
          <Button title={'Agregar'} />
        </View> */}
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
    marginTop: 5,
    marginVertical: 50,
  },
  cardCover: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // tituloContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '60%',

  // },
  titulo: {
    fontSize: 30,
    fontFamily: 'CormorantSCBold',
    justifyContent: 'center',
    alignItems: 'center',

  },
  img: {
    width: '50%'
  },
  sinopsis: {
    padding: 20,
    fontFamily: 'SemiBold'
  },
  precioStock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  precio: {
    fontSize: 20,
    padding: 10,
    fontFamily: 'SemiBold'
  },
  noStock: {
    color: 'red',
    padding: 10,
    fontFamily: 'SemiBold',
    fontSize: 20,
  },
  stock: {
    padding: 10,
    fontFamily: 'SemiBold',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    marginBottom: 50,
    alignItems: 'center',

  }
})