import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
//redux
import { useSelector, useDispatch } from 'react-redux'

import { Button, Card, Paragraph } from 'react-native-paper';
import { addItem } from '../Store/actions/carrito.action'


const LibroDetailSCreen = () => {
  const dispatch = useDispatch()
  const libro = useSelector(store => store.libros.selected)
  // console.log('ExisteLibro**', libro.titulo)

  const libros = useSelector(store => store.libros.libros)
  // console.log('Libros  ',libros)
  const libroID = useSelector(store => store.libros.selected.id)
  // console.log('ID  ', libroID)

  const addlibro = libros.find(item => item.id === libroID)
  // console.log('addlibro  ', addlibro)


  const handleAddLibro = () => dispatch(addItem(addlibro))



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

            <Button
              style={libro.stock <= 0 ? { backgroundColor: 'grey' } : { backgroundColor: 'red' }}
              disabled={libro.stock <= 0 ? true : false} mode="contained"
              onPress={handleAddLibro}
            >Agregar</Button>
          </Card.Actions>
        </Card>

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
    width: '50%',

    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#eeeeee",
    marginLeft: 100,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },

  titulo: {
    fontSize: 30,
    fontFamily: 'CormorantSCBold',
    justifyContent: 'center',
    alignItems: 'center',

  },
  img: {
    width: '110%',
    marginLeft: 150,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height: 250,

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

  },
  button: {
    color: 'red'
  }
})