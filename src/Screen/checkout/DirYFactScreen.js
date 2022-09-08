import React, { useEffect } from 'react'
import { useState } from 'react';
import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Title, TextInput, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../Constants/Colors';
import { addDireccion } from '../../Store/actions/info_envios.action'


const DirYFactScreen = ({ navigation }) => {
  const email = useSelector(store => store.auth.email)
  const users = useSelector(store => store.usuarios.users)
  const user = users === undefined ? null : users.find(e => e.email === email)



  const initalState = {
    nombreCompleto: user.nombre,
    direccion: '',
    edificio_Puerta_Lote: '',
    provincia: '',
    pais: '',
    codigo_Postal: '',
    telefono: user.cell,
    email: email,
    notas: '',
  };
  const [state, setState] = useState(initalState)
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value })
  }
  // console.log(state)

  const dispatch = useDispatch()
  //AGREGAR EL ! PARA QUE SEA FALSO
  const noValidate = !(
    state.nombreCompleto.length && state.direccion.length && state.provincia.length && state.codigo_Postal.length && state.pais && state.telefono.length && state.email.length > 0
  )
  // console.log(noValidate)




  const onHandlerPagar = () => {
    dispatch(addDireccion(state))
    navigation.navigate('PagoConfirmacion')
  }

  const onHandlerVolver = () => navigation.navigate('Carrito')

  return (
    <SafeAreaView style={styles.container}>
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
                left={<TextInput.Icon name="account-outline" />}
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
                label="País *"
                left={<TextInput.Icon name="earth" />}
                style={styles.textInput}
                onChangeText={(value) => handleChangeText(value, "pais")}
                value={state.pais}
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
                label="Teléfono *"
                left={<TextInput.Icon name="cellphone" />}
                style={styles.textInput}
                keyboardType="phone-pad"
                onChangeText={(value) => handleChangeText(value, "telefono")}
                value={state.telefono}
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
                label="Notas"
                left={<TextInput.Icon name="note-multiple" />}
                style={styles.textInput}
                onChangeText={(value) => handleChangeText(value, "notas")}
                value={state.notas}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.inner, styles.buttonsContainer]}>
            <Button
              onPress={onHandlerPagar}
              style={styles.button}
              mode="outlined"
              disabled={noValidate}
            >
              <Text>Proceder a pagar</Text>
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
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',


  },
  inner: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    marginTop: 30

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
  }

})
export default DirYFactScreen