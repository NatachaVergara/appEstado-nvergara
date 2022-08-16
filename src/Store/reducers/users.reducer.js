import { users } from '../../Data/users'
import { SELECT_USUARIO } from '../actions/users.action'


const initialState = {
    users: users,
    selected: null,
}

const UsuariosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_USUARIO:
            const IndexUser = state.users.findIndex(user => user.email === action.email)
            return {
                ...state,
                selected: state.users[IndexUser]
            }
        default:
            return state
    }
}


export default UsuariosReducer