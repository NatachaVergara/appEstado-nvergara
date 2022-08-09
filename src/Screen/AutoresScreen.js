import React from 'react'
import { FlatList, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import GridItem from '../Components/GridItem'
//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
import { selectAutor } from '../Store/actions/autores.action'
import ImageBackgoundBook from '../Components/ImageBackgoundBook'



const AutoresScreen = ({ navigation }) => {

  const autores = useSelector(store => store.autores.autores)
  const dispatch = useDispatch()


  const handleAutor = (item) => {
    // console.log('item', item)
    dispatch(selectAutor(item.id))
    navigation.navigate('LibrosScreen', {
      autor: item.autor
    })
  }

  const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/buscolibro-rn.appspot.com/o/libros%2Fcloseup-books-wellorganized-shelves-bookstore%20(1).jpg?alt=media&token=8103b03d-f530-4cfe-a16b-9d0ad55ac64e' }

  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleAutor} />)

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackgoundBook source={img} resizeMode="cover" style={styles.image}>
        <FlatList
          data={autores}
          keyExtractor={item => item.id}
          renderItem={renderGridItem}
          style={styles.userList}
        />

      </ImageBackgoundBook>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eeeeee"
  },
  userList: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

});
export default AutoresScreen