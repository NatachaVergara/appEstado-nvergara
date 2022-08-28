import { SELECT_USUARIO, CREATE_USUARIO, GET_USUARIOS } from '../actions/users.action'


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
        case SELECT_USUARIO:
            const IndexUser = state.users.findIndex(user => user.userId === action.userId)
            return {
                ...state,
                selected: state.users[IndexUser]
            }
        case CREATE_USUARIO:
            console.log('REDUCER CREAR USUARIO', action.user)
            const newUser = { id: action.user.id.toString(), user: action.user.userInfo }
            return {
                ...state,
                users: [
                    ...state.users,
                    newUser
                ]
            }
        default:
            return state
    }
}


export default UsuariosReducer