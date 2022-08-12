import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PagosScreen = ({ navigation }) => {
    const onHandlerVolver = () => navigation.navigate('DireccionFacturacion')

    return (
        <View style={styles.container}>
            <Text>Forma de pago</Text>
            <Text>Mercado Pago</Text>
            <Text>Tarjeta debito/credito</Text>

            <Pressable onPress={onHandlerVolver}>
                <Text>Volver</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        marginVertical:30,
        backgroundColor: '#fff',

    },
})

export default PagosScreen