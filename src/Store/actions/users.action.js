import * as FileSystem from 'expo-file-system';
import { addUser, fetchUsers, deleteUser } from '../../db/index'

export const SELECT_USUARIO = 'SELECT_USUARIO'
export const CREATE_USUARIO = 'CREATE_USUARIO'
export const GET_USUARIOS = 'GET_USUARIOS'
export const DELETE_USUARIO = 'DELETE_USUARIO'


export const selectUsuario = (email) => ({
    type: SELECT_USUARIO,
    email: email
})



export const getUsuarios = () => {
    return async dispatch => {
        try {
            const result = await fetchUsers()
            console.log('GET USUARIOS TRY', result.rows._array)
            const usersArray = result.rows._array

            dispatch({
                type: GET_USUARIOS,
                users: usersArray,
            })
        } catch (error) {
            console.log('GET USUARIOS CATCH', error)
        }
    }
}


export const createUser = (userId, nombre, email, direccion, cell, img) => {
    return async dispatch => {
        // console.log('USER INFO ACTION', userInfo)
        console.log('IMAGE ACTION', img)

        const fileName = img.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: img,
                to: Path
            })

            const result = await addUser(
                userId,
                nombre,
                email,
                direccion,
                cell,
                Path
            )
            console.log('ACTION RESPONSE NEW USER', result)



            dispatch({
                type: CREATE_USUARIO,
                user: {
                    id: result.insertId,
                    userId,
                    nombre,
                    direccion,
                    email,
                    cell, 
                    image:Path
                },
            })

        } catch (error) {
            console.log('ACTION CATCH ERROR', error.message)
            throw error
        }
    }
}


export const deleteUserInfo = (id) => {
    return async dispatch => {
        try {
            const deleteuser = await deleteUser(id);
            console.log('ACTION RESPONSE DELETE USER', deleteuser)

            const result = await fetchUsers()
            console.log('ACTION RESPONSE UPDATE USER', result.rows._array)
            const usersArray = result.rows._array


            dispatch({
                type: DELETE_USUARIO,
                users: usersArray,
            })


        } catch (error) {
            console.log('ACTION DELETE CATCH ERROR', error.message)
            throw error
        }
    }
}