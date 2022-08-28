import * as FileSystem from 'expo-file-system';
import { addUser, fetchUsers } from '../../db/index'

export const SELECT_USUARIO = 'SELECT_USUARIO'
export const CREATE_USUARIO = 'CREATE_USUARIO'
export const GET_USUARIOS = 'GET_USUARIOS'


export const selectUsuario = (email) => ({
    type: SELECT_USUARIO,
    email: email
})



export const getUsuarios = () => {
    return async dispatch => {
        try {
            const result = await fetchUsers()
            console.log('GET USUARIOS TRY', result)


            dispatch({
                type: GET_USUARIOS,
                users: result.rows.array,
            })
        } catch (error) {
            console.log('GET USUARIOS CATCH', error)
        }
    }
}


export const createUser = (userId, nombre, location, email, cell, image) => {
    return async dispatch => {
        // console.log('USER INFO ACTION', userInfo)
        // console.log('IMAGE ACTION', image)
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_MAPS_KEY}`);
        if (!response.ok) throw new Error('No se ha podido comunicar con Google Maps API')


        const resData = await response.json();
        if (!resData.results) throw new Error('No se ha podido obtener la dirección')

        const address = resData.results[0].formatted_address;
        const fileName = image.split('/').pop()
        const imagen = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: imagen
            })

            const result = await addUser(
                userId,
                nombre,
                address,
                location.lat,
                location.lng,
                email,
                cell,
                imagen
            )
            console.log('ACTION RESPONSE NEW USER', result)



            dispatch({
                type: CREATE_USUARIO,
                user: {
                    id: newUser.insertId,
                    userId,
                    nombre,
                    lat: location.lat,
                    lng: location.lng,
                    email,
                    cell,
                    imagen
                },
            })

        } catch (error) {
            console.log('ACTION CATCH ERROR', error.message)
            throw error
        }
    }
}


