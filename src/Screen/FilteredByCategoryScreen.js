import React, { useEffect } from 'react'
//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectLibro, filteredByCategory } from '../Store/actions/libros.action'

import LibrosCarousel from '../Components/LibrosCarousel'
import { SafeAreaView, StyleSheet } from 'react-native'


const FilteredByCategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const categoriaID = useSelector(store => store.categoria.selected)
    const filtradoporCategoria = useSelector(store => store.libros.filteredByCategory)

    useEffect(() => {
        dispatch(filteredByCategory(categoriaID.id))
    }, [])

    const lista = filtradoporCategoria

    const handleSelected = (item) => {
        dispatch(selectLibro(item.id))
        navigation.navigate('LibroDetalleScreen', {
            libro: item,
            volver: 'LibrosScreen',
            

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
    // posterImage: {
    //     width: "100%",
    //     height: ANCHO_CONTENEDOR * 1.2,
    //     resizeMode: "cover",
    //     borderRadius: 24,
    //     margin: 0,
    //     marginBottom: 10,
    // },
});
export default FilteredByCategoryScreen