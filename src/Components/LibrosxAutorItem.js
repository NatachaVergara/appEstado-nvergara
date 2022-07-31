import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const LibrosxAutorItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.autorItem}>
                <View>
                    <Text style={styles.titulo}>{item.titulo} </Text>
                </View>
                <View>
                    <Text style={styles.detail}>${item.precio} </Text>
                </View>
                <View>
                    <Text style={styles.detail}>Dispobible: {item.dispobible === 0 ? 'no' : 'si'}  </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LibrosxAutorItem

const styles = StyleSheet.create({
    autorItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    titulo: {
        fontSize: 20,
        fontFamily: 'light'
    },
    detail: {
        fontSize: 18
    }


})