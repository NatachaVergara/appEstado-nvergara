import { URL_API } from '../../Constants/database'
export const SELECT_USUARIO = 'SELECT_USUARIO'
export const CREATE_USUARIO = 'CREATE_USUARIO'
export const GET_USUARIOS = 'GET_USUARIOS'


export const selectUsuario = (email) => (
    {
        type: SELECT_USUARIO,
        email: email
    })



export const getUsuarios = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/usuarios.json`, {
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json()
            const users = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
            }))
            //console.log('RESULT USUARIOS', users)


            dispatch({
                type: GET_USUARIOS,
                users
            })



        } catch (error) {
            console.log('GET USUARIOS', error)
        }




    }
}


export const createUser = (userId, userInfo) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/usuarios.json`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    create_date: Date.now(),
                    userId,
                    user: userInfo
                })
            })

            const result = await response.json()
            console.log(result)
            dispatch({
                type: CREATE_USUARIO,
                confirm: true,
            })
        } catch (error) {
            console.log('CREATE USUARIO', error)
        }

    }
}


