import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PagoRealizadoExito = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>GRACIAS POR SU COMPRA</Text>
                <Text style={styles.inconContainer}> <MaterialIcons name='done' style={styles.icon} /> </Text>
                <Text style={styles.text}>Su pago se ha completado correctamente</Text>

            </View>


            <View style={styles.body}>

                <Text style={[styles.text, {fontSize:20}] }>A la brevedad se le enviará toda la información a su correo</Text>

                <View style={styles.buttonsContainer}>
                    <Button style={styles.button} onPress={() => navigation.navigate('PerfilUsuario')}>
                        Ir a perfil
                    </Button>
                    <Button style={styles.button} onPress={() => navigation.navigate('InicioShopScreen')}>
                        Seguir comprando
                    </Button>
                </View>
            </View>


        </View>
    )
}

export default PagoRealizadoExito

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        height: 250
    },
    body: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        margin: 25
    },
    buttonsContainer: {
        width: 400,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 300,
    },
    icon: {
        fontSize: 50,
        color: "green",

    },
    inconContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 10
    },
    text: {
        fontFamily: 'CormorantSCBold',
        textAlign: 'center',
        margin: 30
    },

})