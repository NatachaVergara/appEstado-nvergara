import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Input from '../Components/Input'
import TextLAbel from '../Components/TextLabel'
import Title from '../Components/Title'
import Colors from '../Constants/Colors'

const Register = ({ navigation }) => {
  // { onRegister, onLogin }
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [confirmedPassword, onChangeConfirmedPassword] = useState('')
  const [nombre, onChangeName] = useState('')

  // const login = () => {
  //   onRegister(false)
  //   onLogin(true)
  // }



  const handleRegister = () => {

    if (email === '' || password === '' || confirmedPassword === '' || nombre === '') {
      Alert.alert('No deje campos vacios')
      return
    }
    if (password !== confirmedPassword) {
      Alert.alert('Las contraseñas no coinciden')
      return
    }


   
    setTimeout(() => {
      navigation.navigate('Home')
      Alert.alert(`Bienvenido/a ${nombre}`)
    }, 3000)

  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Title
          title={'Registro'}
          style={styles.title}
        />
        <Card style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={onChangeEmail}
          />
          <Text style={styles.label}>Contraseña</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={onChangePassword}
            maxLength={10}

          />
          <Text style={styles.label}>Repetir contraseña</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={confirmedPassword}
            onChangeText={onChangeConfirmedPassword}
            maxLength={10}
          />
          <Text style={styles.label}>Nombre completo</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='default'
            autoCorrect={false}
            value={nombre}
            onChangeText={onChangeName}

          />


          <Button title='Entrar' color={Colors.secondary} onPress={handleRegister} />
        </Card>
        <TextLAbel
          text={'Ya tengo cuenta'}
          change={() => { navigation.navigate('Login') }}
          onReturn={() => { navigation.navigate('Inicio') }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  label: {
    color: Colors.text,
    margin: 10,
    fontFamily: 'light'
  },
  input: {
    width: 200,
    textAlign: 'center',
    fontSize: 15,

  },
  labelRegister: {
    marginTop: 20,
  },
  volver: {
    fontSize: 20,

  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    width: 100
  }


})


export default Register