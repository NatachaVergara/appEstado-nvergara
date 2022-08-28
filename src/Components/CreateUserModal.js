import React, { useState } from 'react';
import { Title, Modal, Portal, Button, TextInput } from 'react-native-paper';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../Constants/Colors';


import { useDispatch } from 'react-redux';
import { createUser, getUsuarios } from '../Store/actions/users.action'
import LocationSelector from './LocationSelector';
import MapScreen from './MapScreen';
import MapPreview from './MapPreview';



const CreateUserModal = ({ visible, hideModal, userId, email, image }) => {
    const { height, width } = useWindowDimensions();
    const [location, setLocation] = useState(null);

    const useHeight = height - 150
    // console.log(image)
    const initalState = {
        nombreCompleto: '',
        telefonoPrincipal: '',
        email: email,



    };
    const [state, setState] = useState(initalState)
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }

    const noValidate = !(
        state.nombreCompleto.length && state.telefonoPrincipal.length && state.email.length > 0
    )

    const dispatch = useDispatch()
    const onClick = () => {
        // console.log(
        //     'USER ID', userId,
        //     'STATE', state,
        //     'IMAGE', image)
        dispatch(createUser(userId, state.nombreCompleto, state.telefonoPrincipal, state.email, location, image))
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
                                    
                                    <LocationSelector />


                                    <TextInput
                                        label="Teléfono Principal*"
                                        left={<TextInput.Icon name="cellphone" />}
                                        style={styles.textInput}
                                        keyboardType="phone-pad"
                                        onChangeText={(value) => handleChangeText(value, "telefonoPrincipal")}
                                        value={state.telefonoPrincipal}
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



                                </View>
                            </TouchableWithoutFeedback>

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
    container: { flex: 1, paddingBottom: 50 },
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

