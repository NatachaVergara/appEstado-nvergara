import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import LibroItem from '../Components/LibroItem'


//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectLibro, filteredLibros } from '../Store/actions/libros.action'



const LibrosScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const librosFIltrados = useSelector(store => store.libros.filteredLibros)
  const autor = useSelector(store => store.autores.selected)

  console.log('Pantalla LibrosXAutorScreen')
  console.log("librosFIltrados", librosFIltrados)
  console.log("autor", autor)


  useEffect(() => {
    dispatch(filteredLibros(autor.id))
  }, [])

  const handleSelected = (item) => {
    console.log('item', item)
    dispatch(selectLibro(item.id))
    navigation.navigate('LibroDetalleScreen', {
      libro: item,
      volver: 'LibrosScreen'

    })
  }




  const renderLibrosxAutor = ({ item }) => (<LibroItem item={item} onSelected={handleSelected} />)


  return (

    <FlatList
      data={librosFIltrados}
      keyExtractor={item => item.id}
      renderItem={renderLibrosxAutor}
    />


  )
}

export default LibrosScreen