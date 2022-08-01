import React from 'react'
import { FlatList } from 'react-native'
import LibroItem from '../Components/LibroItem'
import { libros } from '../Data/libros'


const LibrosXAutorScreen = ({ navigation, route }) => {
  const books = libros.filter(libro => libro.autor === route.params.autorId)

  const handleSelected = (item) => {
    console.log(item)
    navigation.navigate('Detalle', {
      libro: item,
      volver: 'LibrosxAutor'
     
    })
  }

  const renderLibrosxAutor = ({ item }) => (<LibroItem  item={item} onSelected={handleSelected} /> )


  return (

    <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={renderLibrosxAutor}
    />


  )
}

export default LibrosXAutorScreen