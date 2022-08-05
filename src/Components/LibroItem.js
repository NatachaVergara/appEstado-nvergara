import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const LibroItem = ({ item, onSelected }) => {



    return (
        <TouchableOpacity onPress={() => onSelected(item)} style={styles.card}>
            <Image style={styles.cardImage} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/buscolibro-rn.appspot.com/o/libros%2Ficons8-literatura.gif?alt=media&token=22a668ee-97fa-425b-8b26-cbb4c5eebfaf" }} />
            <View style={styles.cardHeader}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LibroItem

const styles = StyleSheet.create({
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 50,
        marginHorizontal: 20,
        backgroundColor: "white",
        //flexBasis: '42%',
        width: 140,
        height: 140,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        fontSize: 15,        
        alignSelf: 'center',
        color: "black",
        fontFamily:'CormorantSCBold'
    },


})