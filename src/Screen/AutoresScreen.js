import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import GridItem from '../Components/GridItem'
//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
import { selectAutor } from '../Store/actions/autores.action'



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



  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleAutor} />)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={autores}
        keyExtractor={item => item.id}
        
        renderItem={renderGridItem}
        style={styles.userList}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  userList:{
    flex:1,
  },
 
});
export default AutoresScreen