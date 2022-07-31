import React from 'react'
import { FlatList } from 'react-native'
import LibrosxAutorItem from '../Components/LibrosxAutorItem'
import { libros } from '../Data/libros'

const LibrosXAutor = ({ navigation, route }) => {
  const books = libros.filter(libro => libro.autor === route.params.autorId)

  const handleSelected = (item) => {
    navigation.navigate('Detalle'), {
      productId: item.id,
      titulo: item.titulo
    }
  }

  const renderLibrosxAutor = ({ item }) => (
    <LibrosxAutorItem
      item={item}
      onSelected={handleSelected}
    />
  )


  return (

    <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={renderLibrosxAutor}
    />


  )
}

export default LibrosXAutor