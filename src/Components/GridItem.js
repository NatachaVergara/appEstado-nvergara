import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const GridItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity style={styles.card} onPress={() => onSelected(item)} >
            <Image style={styles.image} source={{ uri: item.img }} />
            <View style={styles.cardContent}>
                <Text style={styles.name}> {item.autor} </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        
    },
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 30,
       
    },
    name: {
        fontSize: 15,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold',
        fontFamily: "SemiBold",
        
    },


})

export default GridItem


