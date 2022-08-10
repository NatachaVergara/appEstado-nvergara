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
    const userId = useSelector(store => store.auth.userId)

    const userOrder = orders.filter(userID => userID.userId === userId)

    // console.log('USER_ORDERS',userOrder)
    // console.log('ORDERS',orders)
    
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
            {userOrder.length <= 0 || userOrder === undefined ?
                <Title title={'No hay ordenes procesadas'} style={styles.title} 
                refreshing={false} /> :
                <FlatList
                    data={userOrder}
                    keyExtractor={item => item.id}
                    renderItem={renderOrderItem}
                    numColumns={1}
                    onRefresh={() => dispatch(getOrders())}
                    refreshing={false}
                    style={styles.flatList}
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
        alignItems: 'center',
        

    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontSize: 30,
        marginHorizontal: 50,
        width: 300,
    },
    flatList: {
        width: 350,
    }
})
export default OrdersScreen