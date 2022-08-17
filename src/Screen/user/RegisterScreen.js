import React, { useCallback, useReducer } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground, View } from 'react-native'
import Card from '../../Components/Card'
import InputForm from '../../Components/InputForm'
import TextLAbel from '../../Components/TextLabel'
import Title from '../../Components/Title'
import { IMG_BACKGROUND } from '../../Constants/img'
//Store
import { useDispatch } from 'react-redux'
import * as auth from '../../Store/actions/auth.actions'
//onChange del formulario
import { useFormReducer } from '../../Constants/formReducer'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const Register = ({ navigation }) => {
  const dispatch = useDispatch()
  const [formState, formDispatch] = useReducer(useFormReducer(FORM_INPUT_UPDATE), {
    inputValues: {
      email: '',
      password: '',
      repetirPassword: '',
      // nombreUsuario: '',
      // nombre: '',
      // apellido: '',
      // documento: '',
      // domicilio: '',
      // telefonoPrincipal: '',
      // telefonoAlternativo: '',
    },

    inputValidities: {
      email: false,
      password: false,
      repetirPassword: false,
      // nombreUsuario: false,
      // nombre: false,
      // apellido: false,
      // domicilio: false,
      // telefonoPrincipal: false,
    },
    formIsValid: false,
  });

  const handleRegister = () => {
    // console.log(formState.inputValues.email,
    //   formState.inputValues.nombreUsuario,
    //   formState.inputValues.nombre,
    //   formState.inputValues.apellido,
    //   formState.inputValues.documento,
    //   formState.inputValues.domicilio,
    //   formState.inputValues.telefonoPrincipal,
    //   formState.inputValues.telefonoAlternativo
    // )
    if (formState.inputValues.password != formState.inputValues.repetirPassword) {
      Alert.alert('Las contraseñas no coinciden')
    } else if (formState.formIsValid) {
      dispatch(auth.register(formState.inputValues.email, formState.inputValues.password))

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
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container} behavior='height'>

        <ImageBackground source={IMG_BACKGROUND} resizeMode="cover"
          style={styles.image}  >
          <Title
            title={'Crear cuenta'}
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
              errorMsg='Ingrese una contraseña'
              onInputChange={onInputChangeHandler}
              initialValue=''


            />

            <InputForm
              id='repetirPassword'
              label='Repita la contraseña *'
              keyboardType='default'
              secureTextEntry
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='Repita la contraseña'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            {/* <InputForm
              id='nombreUsuario'
              label='Nombre de usuario *'
              keyboardType='default'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='nombre'
              label='Nombre *'
              keyboardType='default'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='apellido'
              label='Apellido *'
              keyboardType='default'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />

            <InputForm
              id='documento'
              label='DNI *'
              keyboardType='numeric'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='domicilio'
              label='Domicilio *'
              keyboardType='default'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='telefonoPrincipal'
              label='Teléfono principal *'
              keyboardType='phone-pad'
              required
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='telefonoAlternativo'
              label='Teléfono alternativo '
              keyboardType='phone-pad'
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
            <InputForm
              id='imagen'
              label='Imagen '
              keyboardType='default'
              minLength={6}
              autoCapitalize='none'
              errorMsg='No deje el campo vacio'
              onInputChange={onInputChangeHandler}
              initialValue=''
            />
 */}





            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleRegister} style={styles.button}  >
                <Text style={styles.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
            <TextLAbel
              text={'Ya tengo cuenta'}
              change={() => { navigation.navigate('LoginScreen') }}
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

    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    fontFamily: 'SemiBold',
    borderRadius: 10,
    alignSelf: 'center',

  },

  card: {
    width: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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


export default Register