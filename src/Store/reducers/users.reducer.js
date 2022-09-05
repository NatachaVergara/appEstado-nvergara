import { SELECT_USUARIO, CREATE_USUARIO, GET_USUARIOS, DELETE_USUARIO } from '../actions/users.action'


const initialState = {
    users: [],
    selected: null,

}

const UsuariosReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USUARIOS:
          //  console.log('GET USUARIO reducer', action.users)
            return {
                ...state,
                users: action.users
            }
        case SELECT_USUARIO:                    
            const IndexUser = state.users.findIndex(e => e.user.email === action.email)
            return {
                ...state,
                selected: state.users[IndexUser]
            }
        case CREATE_USUARIO:
            // console.log('REDUCER CREAR USUARIO', action.user)
            const newUser = { id: action.user.id.toString(), user: action.user }
            return {
                ...state,
                users: [
                    ...state.users,
                    newUser
                ]
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