import { URL_AUTH_REGISTER } from '../../Constants/database'

export const REGISTER = 'REGISTER'

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

        

        if(!response.ok){
        
            const errorResponse = await response.json();
            console.log(errorResponse)
            const errorID = errorResponse.error.message;
            
            let message = 'No se ha podido registrar';
            if(errorID === 'EMAIL_EXIST') message = 'Este mail ya está registrado';
            throw new Error(message);
        }

        const data = await response.json();

        dispatch({
            type: REGISTER,
            token: data.idToken,
            userId: data.localId,
        })
    }
}