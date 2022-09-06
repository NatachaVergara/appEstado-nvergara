import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import CreateUserModal from './CreateUserModal';
import { useState } from 'react';

// import AuthNavigator from './AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';

const UserInfo = ({ visible, hideModal, showModal, user, email, nombre, direccion, cell, id, deleteUserInformation, styles, img, userId }) => {


    // console.log(img)


    return (

        <>
            <CreateUserModal
                user={user}
                visible={visible}
                hideModal={hideModal}
                showModal={showModal}
                title={"Actualizar de Perfil"}
                nombre={nombre}
                direccion={direccion}
                email={email}
                cell={cell}
                img={img}
                btnText='Actualizar'
                userId={userId}

            />


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
                        <Button mode="contained" onPress={() => showModal()}>
                            Editar Perfil
                        </Button>
                    </View>}
            </View>
        </>
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