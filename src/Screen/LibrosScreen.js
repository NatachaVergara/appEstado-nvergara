import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View, ImageBackground } from 'react-native'
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

  const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/buscolibro-rn.appspot.com/o/libros%2Fcloseup-books-wellorganized-shelves-bookstore%20(1).jpg?alt=media&token=8103b03d-f530-4cfe-a16b-9d0ad55ac64e' }
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          horizontal={false}
          numColumns={2}
          data={librosFiltrados}
          keyExtractor={item => item.id}
          renderItem={renderLibrosxAutor}
        />
      </ImageBackground>
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
  
  },
  listContainer: {
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

})
export default LibrosScreen