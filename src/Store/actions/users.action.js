import * as FileSystem from 'expo-file-system';
import { URL_API } from '../../Constants/database';
import { addUser, fetchUsers, deleteUser, updateUser } from '../../db/index'

export const SELECT_USUARIO = 'SELECT_USUARIO'
export const CREATE_USUARIO = 'CREATE_USUARIO'
export const GET_USUARIOS = 'GET_USUARIOS'
export const UPDATE_USUARIO = 'UPDATE_USUARIO'
export const DELETE_USUARIO = 'DELETE_USUARIO'


export const selectUsuario = (email) => ({
    type: SELECT_USUARIO,
    email: email
})



export const getUsuarios = () => {
    return async dispatch => {
        try {


            // const getUpdateUsersFirebase = await fetch(`${URL_API}/users.json`, {
            //     headers: { 'Content-Type': 'application/json' }
            // });

            // const responseGetUsers = await getUpdateUsersFirebase.json();
            // // console.log("RESPONSE GET USERS FROM FIREBASE", responseGetUsers)


            // const usuariosFirebase = Object.keys(responseGetUsers).map(
            //     key => ({
            //         ...responseGetUsers[key], id: key
            //     }))


            // console.log("USUARIOS DESDE FIREBASE", usuariosFirebase)
            // console.log("USUARIOS DESDE FIREBASE typeOf", typeof usuariosFirebase)




            const result = await fetchUsers()
            // console.log('GET USUARIOS TRY', result.rows._array)
            const usersArray = result.rows._array
            // console.log(usersArray)


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
        // console.log('IMAGE ACTION', img)

        const fileName = img.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: img,
                to: Path
            })

            const createUserFirebase = await fetch(`${URL_API}/users.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    user: {
                        userId,
                        nombre,
                        email,
                        direccion,
                        cell,
                        Path
                    }
                }),
            })

            const newUserResponse = await createUserFirebase.json();
            console.log(newUserResponse)

            const getUpdateUsersFirebase = await fetch(`${URL_API}/users.json`, {
                headers: { 'Content-Type': 'application/json' }
            });

            const responseGetUsers = await getUpdateUsersFirebase.json();
            console.log("RESPONSE GET USERS FROM FIREBASE", responseGetUsers)


            const usuarios = Object.keys(responseGetUsers).map(
                key => ({
                    ...responseGetUsers[key], id: key
                }))


            console.log("USUARIOS", usuarios)

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
                    image: Path
                },
            })

        } catch (error) {
            console.log('ACTION CATCH ERROR', error.message)
            throw error
        }
    }
}



export const updateUsuario = (id, userId, nombre, email, direccion, cell, image) => {
    return async dispatch => {
        try {

            const update = await updateUser(id, userId, nombre, email, direccion, cell, image)
            console.log('ACTION RESPONSE UPDATE USER', update)

            const result = await fetchUsers()
            // console.log('GET USUARIOS TRY', result.rows._array)
            const usersArray = result.rows._array
            // console.log(usersArray)


            dispatch({
                type: UPDATE_USUARIO,
                users: usersArray,
            })


        } catch (error) {
            console.log('ACTION CATCH ERROR UPDATE', error.message)
            throw error
        }
    }
}


export const deleteUserInfo = (id) => {
    return async dispatch => {
        try {
            const deleteuser = await deleteUser(id);
            console.log('ACTION RESPONSE DELETE USER', deleteuser)

            const resertUsersList = await fetchUsers()
            console.log('ACTION RESPONSE UPDATE USER', resertUsersList.rows._array)
            const usersArray = resertUsersList.rows._array


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