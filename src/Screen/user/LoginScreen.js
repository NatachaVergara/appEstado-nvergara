import React, { useCallback, useEffect, useReducer } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground, View } from 'react-native'
import Card from '../../Components/Card'
import TextLAbel from '../../Components/TextLabel'
import Title from '../../Components/Title'
import InputForm from '../../Components/InputForm'
import { IMG_BACKGROUND } from '../../Constants/img'
//Store
import { useDispatch } from 'react-redux'
import * as auth from '../../Store/actions/auth.actions'

//onChange del formulario
import { useFormReducer } from '../../Constants/formReducer'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [formState, formDispatch] = useReducer(useFormReducer(FORM_INPUT_UPDATE), {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });


  const handleLogin = () => {
    // console.log(formState.inputValues.email, formState.inputValues.password)

    if (formState.formIsValid) {
      dispatch(auth.logIn(formState.inputValues.email, formState.inputValues.password))

    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y contraseña válido',
        [{ text: 'Ok' }]
      )
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch])




  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView style={styles.container} behavior='height'>

        <ImageBackground
          source={IMG_BACKGROUND} resizeMode="cover"
          style={styles.image}
        >
          <Title
            title={'Iniciar sesión'}
            style={styles.title}
          />
          <Card style={styles.card}>
            <InputForm
              id='email'
              label='Email *'
              keyboardType='email-address'
              required
              email
              autoCapitalize='none'
              errorMsg='ingrese un email'
              onInputChange={onInputChangeHandler}
              initialValue=''

            />
            <InputForm
              id='password'
              label='Contraseña *'
              keyboardType='default'
              secureTextEntry
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='ingrese su contraseña'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLogin} style={styles.button}  >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <TextLAbel
              text={'No tengo cuenta'}
              change={() => { navigation.navigate('RegisterScreen') }}
              onReturn={() => { navigation.navigate('AuthScreen') }}
            />
          </Card>

        </ImageBackground>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',


  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  title: {
    marginTop: 10,
    backgroundColor: "#000000c0",
    color: "white",

    lineHeight: 84,
    fontWeight: "bold",
    fontFamily: 'SemiBold',
    borderRadius: 10,
    alignSelf: 'center'
  },

  card: {
    width: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,


  },

  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 40,

  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 10,


  },
  buttonText: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'SemiBold',
    padding: 20,
    alignItems: "center",
    justifyContent: 'center',

  }


})
export default Login