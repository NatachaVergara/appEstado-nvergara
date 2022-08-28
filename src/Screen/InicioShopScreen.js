import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

import ImageBackgoundBook from '../Components/ImageBackgoundBook';
import { IMG_BACKGROUND } from '../Constants/img';
import { getUsuarios } from '../Store/actions/users.action'
import { useDispatch } from 'react-redux';


const InicioShopScreen = ({ navigation }) => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getUsuarios())
    // })

    let list = [{ id: 1, nombre: 'Autores', path: 'AutoresScreen' }, { id: 2, nombre: 'Categorías', path: 'CategoriaScreen' }]


    const onHandleClick = (item) => {
        navigation.navigate(item.path, {
            title: item.name
        })
    }




    const renderGridItem = ({ item }) => (

        <TouchableOpacity
            style={styles.card}
            onPress={() => onHandleClick(item)}>
            <Text style={styles.name}> {item.nombre}  </Text>
        </TouchableOpacity>
    )


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackgoundBook source={IMG_BACKGROUND} resizeMode="cover"
                style={styles.image}>
                <FlatList
                    data={list}
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

        height: 150,
        borderRadius: 6,

    },
    userList: {
        flex: 1,
        width: 300,
        padding: 50


    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        marginTop: 50,
        backgroundColor: '#fff',
        height: 100,

    },
    name: {
        fontSize: 20,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold',
        fontFamily: "SemiBold",

    },

});


export default InicioShopScreen