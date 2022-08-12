
import { Alert } from 'react-native'
import { URL_AUTH_REGISTER, URL_AUTH_LOGIN } from '../../Constants/database'

export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
let message

export const logOut = () => ({
    type: LOGOUT
})

export const register = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });



        if (!response.ok) {
            const errorResponse = await response.json();
            console.log(errorResponse)
            const errorID = errorResponse.error.message;
            message = 'No se ha podido registrar';
            if (errorID === 'EMAIL_EXIST') message = 'Este mail ya está registrado';
            Alert.alert(message)
        }
        const data = await response.json();

        dispatch({
            type: REGISTER,
            token: data.idToken,
            userId: data.localId,

        })



    }
}

export const logIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            ,
            body: JSON.stringify({
                email,
                password: password,
                returnSecureToken: true,
            })
        })

        if (!response.ok) {
            const errorresponse = await response.json()
            const errorID = await errorresponse.error.message
            message =  "No se ha podido realizar el logIn, revise la información"
            if (errorID === 'EMAIL_NOT_FOUND') message = 'No se encuentra registrado ese email';
            if (errorID === 'INVALID_PASSWORD') message = 'Contraseña incorrecta';
            if (errorID === 'USER_DISABLED') message = 'La cuenta de usuario ha sido deshabilitada por un administrador';
            Alert.alert(message)
            //  throw new Error(message)


        }

        const result = await response.json();

        dispatch({
            type: LOGIN,
            token: result.idtoken,
            userId: result.localId,


        })
    }

}