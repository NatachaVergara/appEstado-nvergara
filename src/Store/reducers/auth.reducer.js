import { REGISTER, LOGIN, LOGOUT } from '../actions/auth.actions'

const initialState = {
    token: null,
    userId: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            };
        case LOGIN: {
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        }
        case LOGOUT: {
            return {
                state,
            }
        }
        default:
            return state;
    }
}

export default AuthReducer