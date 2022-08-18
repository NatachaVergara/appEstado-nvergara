import { users } from '../../Data/users'
import { SELECT_USUARIO, CREATE_USUARIO, GET_USUARIOS } from '../actions/users.action'


const initialState = {
    users: [],
    selected: null,
  
}

const UsuariosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_USUARIO:
            const IndexUser = state.users.findIndex(user => user.userId === action.userId)
            return {
                ...state,
                selected: state.users[IndexUser]
            }
        case CREATE_USUARIO:
            return {
                ...state,
            }
        case GET_USUARIOS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}


export default UsuariosReducer