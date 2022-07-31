import React from 'react'
import {FlatList} from 'react-native'
import { autores } from '../Data/autores'
import GridItem from '../Components/GridItem'

const AutoresScreen = ({ navigation }) => {

  const handleAutor = (item) => {
    navigation.navigate('LibrosxAutor', {
      autorId: item.id,
      autor: item.autor
    })
  }

  const renderGridItem = ({ item }) => (
    <GridItem
      item={item}
      onSelected={handleAutor}
    />
    )
  
  return (
    <FlatList
      data={autores}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={renderGridItem}
    />
  )
}

export default AutoresScreen