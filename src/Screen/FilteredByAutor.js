import React, { useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native'

//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectLibro, filteredLibros } from '../Store/actions/libros.action'

import LibrosCarousel from '../Components/LibrosCarousel'


const FilteredByAutor = ({ navigation }) => {
  const dispatch = useDispatch()

  const autor = useSelector(store => store.autores.selected)
  const librosFiltrados = useSelector(store => store.libros.filteredLibros)


  useEffect(() => {
    dispatch(filteredLibros(autor.id))
  }, [])

  const lista = librosFiltrados


  const handleSelected = (item) => {
    dispatch(selectLibro(item.id))
    navigation.navigate('LibroDetalleScreen', {
      libro: item,
      volver: 'FilteredByAutor'
    })
  }



  return (
    <SafeAreaView style={styles.container}>
      <LibrosCarousel
        lista={lista}
        handleselected={handleSelected}
      />
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

});
export default FilteredByAutor