import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'

import Card from '../../Components/Card'
import Input from '../../Components/Input'
import InputForm from '../../Components/InputForm'
import TextLAbel from '../../Components/TextLabel'
import Title from '../../Components/Title'
import Colors from '../../Constants/Colors'

const Register = ({ navigation }) => {

  const handleRegister = () => console.log('hola')


  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Title
          title={'Registro'}
          style={styles.title}
        />
        <Card style={styles.card}>
          <InputForm
            id='email'
            label='Email'
            keyboardType='email-address'
            required
            email
            autoCapitalize='none'
            errorMsg='Por favor ingrese un email'
            onInputChange={() => { }}
            initialValue=''
          />
          <InputForm
            id='password'
            label='Contraseña'
            keyboardType='default'
            secureTextEntry
            required
            minLength={6}
            autoCapitalize='none'
            errorMsg='Cree una contraseña'
            onInputChange={() => { }}
            initialValue=''
          />




          <TouchableOpacity onPress={handleRegister}  >
            <Text style={styles.button}>Entrar</Text>
          </TouchableOpacity>

        </Card>
        <TextLAbel
          text={'Ya tengo cuenta'}
          change={() => { navigation.navigate('LoginScreen') }}
          onReturn={() => { navigation.navigate('AuthScreen') }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    marginLeft: 60
  },

  card: {
    marginTop: '20%',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8%'
  },

  volver: {
    fontSize: 20,

  },
  button: {
    color: Colors.secondary,
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'CormorantSCBold'

  }


})


export default Register