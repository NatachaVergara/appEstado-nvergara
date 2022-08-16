import { URL_API } from '../../Constants/database'
export const SELECT_USUARIO = 'SELECT_USUARIO'
export const ADD_USUARIO = 'ADD_USUARIO'



export const selectUsuario = (email) => (
    {
        type: SELECT_USUARIO,
        email: email
    })
