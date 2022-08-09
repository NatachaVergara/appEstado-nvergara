import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../Components/OrderItem'

import { useSelector, useDispatch } from 'react-redux'
import { getOrders, deleteOrder } from '../Store/actions/orders.action'
import Title from '../Components/Title'

const OrdersScreen = () => {

    const onHandlerDelete = (id) => dispatch(deleteOrder(id))

    const dispatch = useDispatch()
    const orders = useSelector(store => store.orders.orders)


    useEffect(() => {
        dispatch(getOrders());
    }, [])


    const renderOrderItem = ({ item }) => (
        <OrderItem
            item={item}
            onDelete={onHandlerDelete}

        />
    )


    return (
        <View style={styles.container}>
            {orders.length <= 0 || orders === undefined ?
                <Title title={'No hay ordenes procesadas'} style={styles.title} /> :
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={renderOrderItem}
                    numColumns={1}
                    onRefresh={() => dispatch(getOrders())}
                    refreshing={false}
                />}

        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
        backgroundColor: '#fff',

    }, 
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color:'red',
        fontSize: 30,
        marginHorizontal:50,      
        width: '100%',
    }
})
export default OrdersScreen