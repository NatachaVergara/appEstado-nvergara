import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
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
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        numColumns={2}
        data={librosFiltrados}
        keyExtractor={item => item.id}
        renderItem={renderLibrosxAutor}
      />
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#f6f6f6',
  }, 
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f6f6f6",
  },
  listContainer: {
    alignItems: 'center'
  },

})
export default LibrosScreen