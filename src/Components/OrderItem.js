import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'


const OrderItem = ({ item, onDelete }) => {
    console.log('Order ITEM: ', item)

    const formatDate = (time) => {
        const date = new Date(time).toLocaleDateString()
        return date
    }

    return (
        <View style={styles.order}>
            <View>
                <Text style={styles.date}>Fecha: {formatDate(item.date)}</Text>
                <Text style={styles.total}>Monto: ${item.total}  </Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name='md-trash' size={22} />
                </TouchableOpacity>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
    },
    date: {
        fontSize: 18,
    },
    total: {
        fontSize: 18,
        fontFamily: 'CormorantSCBold'
    }

})



export default OrderItem