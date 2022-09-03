import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../Components/CartItem'
//Reducer-Store
import { useSelector, useDispatch, connect } from 'react-redux'
import { removeItem } from '../Store/actions/carrito.action'


const CarritoScreen = ({ navigation }) => {
    console.log('CARRITO SCREEN')

    const dispatch = useDispatch()
    const items = useSelector(store => store.carrito.carrito)
    console.log('CARRITO SCREEN ITEMS', items)
    const total = useSelector(store => store.carrito.total)
    // const userId = useSelector(store => store.auth.userId)


    const handlerDireccionFacturacion = () => {
        navigation.navigate('Checkout')
    }

    const handleDeleteItem = (id) => dispatch(removeItem(id))

    const renderItem = ({ item }) => (
        <CartItem item={item} onDelete={handleDeleteItem} />

    )



    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.listContainer}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>

            <View style={styles.footer}>

                <TouchableOpacity
                    // onPress={handlerConfirm}
                    onPress={handlerDireccionFacturacion}
                    style={styles.confirm}
                    disabled={items === undefined || items.length <= 0 ? true : false}
                // disabled={true}
                >
                    <Text>COMPRAR</Text>
                    <View>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
        backgroundColor: '#fff',

    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderColor: '#ccc',
        borderTopWidth: 1,
        marginTop: 50,
        paddingBottom: 120
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 18,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totally: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
        fontFamily: 'CormorantSCBold',
        color: 'red'
    }
})

export default connect()(CarritoScreen)