import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-native-paper';
import Title from '../../Components/Title';

import { confirmCarrito } from '../../Store/actions/carrito.action'



const FinalizarCompra = ({ navigation }) => {

    const dispatch = useDispatch()
    const items = useSelector(store => store.carrito.carrito)
    console.log('items', items)

    const total = useSelector(store => store.carrito.total)
    const userId = useSelector(store => store.auth.userId)
    const info = useSelector(store => store.info_envios.infoEnvios)
    // console.log('Finalizar Compra INFO',info)


    const handlerConfirm = () => {
        dispatch(confirmCarrito(items, total, userId, info))
        setTimeout(() => {
            navigation.navigate('PerfilUsuario')
        }, 4000)
    }
    const onHandlerVolver = () => navigation.navigate('PagoConfirmacion')



    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Title
                    title='Finalizar compra'
                    style={styles.title}
                />


                <View style={styles.statsContainer}>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>${total}</Text>
                        <Text style={[styles.text, styles.subText]}>Monto Final</Text>
                    </View>
                </View>
                <View style={[styles.inner, styles.infoPersonalContainer]}>
                    <Text style={[styles.text, { fontSize: 15, margin: 10 }]} >Nombre Completo: {info.nombreCompleto} </Text>
                    <Text style={[styles.text, { fontSize: 15, margin: 10 }]}>Dirección: {info.direccion} {info.edificio_Puerta_Lote} {info.provincia}. CP {info.codigo_Postal}    </Text>
                    <Text style={[styles.text, { fontSize: 15, margin: 10 }]}>Notas:{info.notas} </Text>
                    <Text style={[styles.text, { fontSize: 15, margin: 10 }]}>Medio de pago: Tarjeta</Text>
                </View>

                <View style={[styles.inner, styles.buttonsContainer]}>
                    <Button
                        onPress={handlerConfirm}
                        style={styles.button}
                        mode="outlined"
                    >
                        <Text>COMPRAR</Text>
                    </Button>

                    <Button
                        onPress={onHandlerVolver}
                        mode="outlined"
                        icon="arrow-left"

                        style={styles.button}
                    >
                        <Text>Volver</Text>
                    </Button>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default FinalizarCompra

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    scrollView: {


    },
    title:
    {
        backgroundColor: 'transparent',
        alignSelf: 'center'
    },
    carousel: {
        backgroundColor: 'transparent',
    },
    text: {
        fontFamily: 'CormorantSCBold',
        color: "#52575D",
        backgroundColor: 'transparent',
    },
    mediaImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32,

    },
    statsBox: {
        alignItems: "center",
        flex: 1,

    },
    inner: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: 350,

    },
    buttonsContainer: {
        padding: 0,
        marginBottom: 100,
        marginVertical: 0
    },
    button: {
        margin: 10,
        color: 'red'
    },
    infoPersonalContainer: {
        justifyContent: 'flex-start',

    }
});