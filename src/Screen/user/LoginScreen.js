import React, { useCallback, useReducer } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Card from '../../Components/Card'

import TextLAbel from '../../Components/TextLabel'
import Title from '../../Components/Title'
import Colors from '../../Constants/Colors'

import { useDispatch } from 'react-redux'
import * as auth from '../../Store/actions/auth.actions'
import InputForm from '../../Components/InputForm'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updateValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };

    let updateFormIsValid = true;

    for (const key in updateValidities) {
      updateFormIsValid = updateFormIsValid && updateValidities[key]
    }

    return {
      formIsValid: updateFormIsValid,
      inputValidities: updateValidities,
      inputValues: updateValues,

    }
  }


  return state;

}








const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [formState, formDispatch] = useReducer(formReducer, {
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
    console.log(formState.inputValues.email, formState.inputValues.password)

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
            errorMsg='ingrese un email'
            onInputChange={onInputChangeHandler}
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
            errorMsg='crea una contraseña'
            onInputChange={onInputChangeHandler}
            initialValue=''


          />

          <TouchableOpacity onPress={handleLogin}  >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>

        </Card>
        <TextLAbel
          text={'No tengo cuenta'}
          change={() => { navigation.navigate('RegisterScreen') }}
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
export default Login