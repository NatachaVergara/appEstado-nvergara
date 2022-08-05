import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import OrderItem from '../Components/OrderItem'

import { useSelector, useDispatch } from 'react-redux'
import { getOrders, deleteOrder } from '../Store/actions/orders.action'

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
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderOrderItem}
                numColumns={1}
            />
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
        backgroundColor: '#fff',

    }
})
export default OrdersScreen