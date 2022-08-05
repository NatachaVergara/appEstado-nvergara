import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import LibroItem from '../Components/LibroItem'


//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectLibro, filteredLibros } from '../Store/actions/libros.action'



const LibrosScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const librosFiltrados = useSelector(store => store.libros.filteredLibros)
  const autor = useSelector(store => store.autores.selected)


  useEffect(() => {
    dispatch(filteredLibros(autor.id))
  }, [])

  const handleSelected = (item) => {

    dispatch(selectLibro(item.id))
    navigation.navigate('LibroDetalleScreen', {
      libro: item,
      volver: 'LibrosScreen'

    })
  }


  const renderLibrosxAutor = ({ item }) => (<LibroItem item={item} onSelected={handleSelected} />)


  return (

    <FlatList
      data={librosFiltrados}
      keyExtractor={item => item.id}
      renderItem={renderLibrosxAutor}
    />


  )
}

export default LibrosScreen