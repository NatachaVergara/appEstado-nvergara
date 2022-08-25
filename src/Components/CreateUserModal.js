import React, { useState } from 'react';
import { Title, Modal, Portal, Button, TextInput } from 'react-native-paper';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from '../Constants/Colors';


import { useDispatch } from 'react-redux';
import { createUser, getUsuarios } from '../Store/actions/users.action'



const CreateUserModal = ({ visible, hideModal, userId, setImage, pickImage, email, image }) => {
    const { height, width } = useWindowDimensions();

    const useHeight = height - 150
    // console.log(image)
    const initalState = {
        nombreCompleto: '',
        direccion: '',
        edificio_Puerta_Lote: '',
        provincia: '',
        codigo_Postal: '',
        telefonoPrincipal: '',
        telefonoAlternativo: '',
        email: email,
        documento: ''


    };
    const [state, setState] = useState(initalState)
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }

    const noValidate = !(
        state.nombreCompleto.length && state.direccion.length && state.provincia.length && state.codigo_Postal.length && state.telefonoPrincipal.length && state.email.length && state.documento.length > 0
    )

    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(createUser(userId, state))
        dispatch(getUsuarios())
        hideModal()
    }


    return (

        <Portal>
            <Modal visible={visible} style={[styles.container]}>
                <SafeAreaView >
                    <ScrollView style={styles.scrollView}>
                        <KeyboardAwareScrollView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                        >
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.inner}>
                                    <Title >Información de envío</Title>
                                    <Text style={{ color: Colors.secondary }}>* campos obligatorios</Text>
                                    <TextInput
                                        label="Nombre Completo *"
                                        left={<TextInput.Icon name="account" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "nombreCompleto")}
                                        value={state.nombreCompleto}
                                    />
                                    <TextInput
                                        label="Dirección *"
                                        left={<TextInput.Icon name="home" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "direccion")}
                                        value={state.direccion}
                                    />
                                    <TextInput
                                        label="Edificio/Puerta/Lote"
                                        left={<TextInput.Icon name="home" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "edificio_Puerta_Lote")}
                                        value={state.edificio_Puerta_Lote}
                                    />
                                    <TextInput
                                        label="Provincia *"
                                        left={<TextInput.Icon name="earth" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "provincia")}
                                        value={state.provincia}
                                    />
                                    <TextInput
                                        label="Código Postal *"
                                        left={<TextInput.Icon name="map-marker" />}
                                        style={styles.textInput}
                                        keyboardType="numeric"
                                        onChangeText={(value) => handleChangeText(value, "codigo_Postal")}
                                        value={state.codigo_Postal}
                                    />
                                    <TextInput
                                        label="Número de documento *"
                                        left={<TextInput.Icon name="card-account-details" />}
                                        style={styles.textInput}
                                        keyboardType="numeric"
                                        onChangeText={(value) => handleChangeText(value, "documento")}
                                        value={state.documento}
                                    />
                                    <TextInput
                                        label="Teléfono Principal*"
                                        left={<TextInput.Icon name="cellphone" />}
                                        style={styles.textInput}
                                        keyboardType="phone-pad"
                                        onChangeText={(value) => handleChangeText(value, "telefonoPrincipal")}
                                        value={state.telefonoPrincipal}
                                    />
                                    <TextInput
                                        label="Teléfono Alternativo"
                                        left={<TextInput.Icon name="cellphone" />}
                                        style={styles.textInput}
                                        keyboardType="phone-pad"
                                        onChangeText={(value) => handleChangeText(value, "telefonoAlternativo")}
                                        value={state.telefonoAlternativo}
                                    />
                                    <TextInput
                                        label="Email *"
                                        left={<TextInput.Icon name="email" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "email")}
                                        value={state.email}
                                        keyboardType="email-address"
                                        autoCapitalize='none'
                                    />
                                    {/* <View style={styles.profileImage}>
                                        <Image source={{ uri: state.image }} style={styles.image} resizeMode="center" />
                                    </View> */}

                                </View>
                            </TouchableWithoutFeedback>
                            {/* <View style={styles.add}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Ionicons name="camera-outline" size={25} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}>
                                    </Ionicons>
                                </TouchableOpacity>
                            </View> */}
                            <Button style={{ marginTop: 30 }} onPress={onClick} >
                                Crear usuario
                            </Button>
                            <Button onPress={hideModal}>
                                Cerrar
                            </Button>
                        </KeyboardAwareScrollView>
                    </ScrollView>
                </SafeAreaView>

            </Modal>
        </Portal>


    )
}
const styles = StyleSheet.create({
    container: { flex: 1, paddingBottom: 50},
    scrollView: {
        backgroundColor: 'pink',

    },
    inner: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: 350,



    },
    textInput: {
        width: 300,
        margin: 10
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
    add: {
        backgroundColor: "#41444B",
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: 100
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 10,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },


})
export default CreateUserModal

