import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
import { selectCategoria } from '../Store/actions/categoria.action'
import ImageBackgoundBook from '../Components/ImageBackgoundBook'
import { IMG_BACKGROUND } from '../Constants/img'
import Categoria from '../Components/Categoria';

const CategoriaScreen = ({ navigation }) => {
    const categorias = useSelector(store => store.categoria.categorias)
    // console.log('CATEGORIAS', categorias)
    const dispatch = useDispatch()

    const handlerCategoria = (item) => {
        // console.log('CATEGORIA ITEMS', item.categoria)
        dispatch(selectCategoria(item.id))
        navigation.navigate('LibrosScreen', { categoria: item.categoria })

    }

    const renderGridItem = ({ item }) => (<Categoria item={item} onSelected={handlerCategoria} />)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackgoundBook source={IMG_BACKGROUND} resizeMode="cover" style={styles.image}>
                <FlatList
                    data={categorias}
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


export default CategoriaScreen