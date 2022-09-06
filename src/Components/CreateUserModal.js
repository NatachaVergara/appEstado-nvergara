import React, { useState } from 'react';
import { Title, Modal, Portal, TextInput } from 'react-native-paper';
import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../Constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { createUser, getUsuarios, updateUsuario } from '../Store/actions/users.action'
import ButtonModal from './Button';




const CreateUserModal = ({ id, visible, hideModal, userId, email, title, nombre, direccion, cell, img, btnText, user }) => {
    const [image, setImage] = useState('')


    //    console.log('MODAL', user)

    const initalState = {
        nombre: nombre,
        email: email,
        direccion: direccion,
        cell: cell,
    };
    const [state, setState] = useState(initalState)
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }
    const noValidate = !(
        state.nombre.length && state.cell.length && state.email.length && state.direccion.length && image.length > 0
    )

    const dispatch = useDispatch()

    const onCreateClick = () => {
        console.log('create')
        dispatch(createUser(userId, state.nombre, state.email, state.direccion, state.cell, image))
        setTimeout(() => {
            dispatch(getUsuarios())
            hideModal()
        }, 1000)

    }



    const onUpdateClick = () => {
        console.log('Update')
        // console.log(user.id, userId, state.nombre, state.email, state.direccion, state.cell, image)
        dispatch(updateUsuario(user.id, userId, state.nombre, state.email, state.direccion, state.cell, image))
        hideModal()
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            setImage(result.uri);
        } else {
            setImage('')
        }
    };

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
                                    <Title >{title}</Title>
                                    <Text style={{ color: Colors.secondary }}>* campos obligatorios</Text>
                                    <TextInput
                                        label="Nombre Completo *"
                                        left={<TextInput.Icon name="account" />}
                                        style={styles.textInput}
                                        onChangeText={(value) => handleChangeText(value, "nombre")}
                                        value={state.nombre}
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


                                    <TextInput
                                        label="Dirección(ciudad, prov , cp) *"
                                        left={<TextInput.Icon name="home" />}
                                        style={[styles.textInput, styles.textInputAddres]}
                                        onChangeText={(value) => handleChangeText(value, "direccion")}
                                        value={state.direccion}


                                    />

                                    <TextInput
                                        label="Teléfono Principal*"
                                        left={<TextInput.Icon name="cellphone" />}
                                        style={styles.textInput}
                                        keyboardType="phone-pad"
                                        onChangeText={(value) => handleChangeText(value, "cell")}
                                        value={state.cell}
                                    />

                                    <View style={{ alignSelf: "center" }}>
                                        {image ? <View style={styles.profileImage}>
                                            <Image source={{ uri: image }} style={styles.image} resizeMode="center" />
                                        </View> : <Text>Elegir imagen</Text>}

                                        <View style={styles.active}></View>
                                        <View style={styles.add}>
                                            <TouchableOpacity onPress={pickImage}>
                                                <Ionicons name="camera-outline" size={25} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}></Ionicons>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>

                            <ButtonModal
                                styles={{ marginTop: 30 }}
                                onClick={user ? onUpdateClick : onCreateClick}
                                btnText={btnText}
                                disabled={noValidate}

                            />
                            <ButtonModal
                                onClick={hideModal}
                                btnText='Cerrar'
                            />


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
    textInputAddres: {
        height: 100
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

