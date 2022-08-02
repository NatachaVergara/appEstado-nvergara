import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../Constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

const CartItem = ({ item, onDelete }) => {
    return (
        <View styles={styles.item}>
            <View styles={styles.item}>
                <Text style={styles.header}>Libro: {item.titulo} </Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.text}>Cantidad {item.cantidad}  </Text>
                    <Text style={styles.text}>${item.precio}  </Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)} >
                    <Ionicons name='trash' size={24} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',



    },
    header: {
        fontSize: 18,
        fontFamily: 'CormorantSCBold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    text: {
        fontSize: 16,
        fontFamily: 'SemiBold'
    }
})

export default CartItem