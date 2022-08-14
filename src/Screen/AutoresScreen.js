import React from 'react'
import { FlatList,  SafeAreaView, StyleSheet } from 'react-native'
import GridItem from '../Components/GridItem'
//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
import { selectAutor } from '../Store/actions/autores.action'
import ImageBackgoundBook from '../Components/ImageBackgoundBook'
import { IMG_BACKGROUND } from '../Constants/img'



const AutoresScreen = ({ navigation }) => {

  const autores = useSelector(store => store.autores.autores)
  
  // console.log('AUTORES ', autores)
 
  const dispatch = useDispatch()


  const handleAutor = (item) => {
    // console.log('AUTORES ITEM', item)
    dispatch(selectAutor(item.id))
    navigation.navigate('LibrosScreen', {
      autor: item.autor
    })
  }



  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleAutor} />)

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackgoundBook source={IMG_BACKGROUND} resizeMode="cover" style={styles.image}>
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