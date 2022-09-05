import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
const UserInfo = ({ user, email, nombre, direccion, cell, id, deleteUserInformation, styles }) => {
    // console.log(id)
    return (
        <View>
            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Email: {email} </Text>
            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Nombre completo: {nombre}</Text>
            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Domicilio: {direccion}  </Text>
            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Principal:{cell}</Text>
            {user === null || user === undefined ? <View style={{ display: "none" }}>
                <Button mode="contained" onPress={() => deleteUserInformation(id)}>
                    Eliminar Perfil
                </Button>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Editar
                </Button>
            </View> :
                <View style={stylesButton.buttonContainer}>

                    <Button mode="contained" onPress={() => deleteUserInformation(id)}>
                        Eliminar Perfil
                    </Button>
                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        Editar Perfil
                    </Button>
                </View>}
        </View>
    )
}


const stylesButton = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
})


export default UserInfo