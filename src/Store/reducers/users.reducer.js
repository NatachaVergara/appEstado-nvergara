import { CREATE_USUARIO, GET_USUARIOS, DELETE_USUARIO, UPDATE_USUARIO } from '../actions/users.action'


const initialState = {
    users: [],
    selected: null,

}

const UsuariosReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USUARIOS:
            return {
                ...state,
                users: action.users
            }

        case CREATE_USUARIO:
            const newUser = { id: action.user.id.toString(), user: action.user }
            return {
                ...state,
                users: [
                    ...state.users,
                    newUser
                ]
            }
        case UPDATE_USUARIO:
            return {
                ...state,
                users: action.users
            }
        case DELETE_USUARIO:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}


export default UsuariosReducer