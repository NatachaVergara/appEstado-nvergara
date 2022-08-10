import { REGISTER, LOGIN } from '../actions/auth.actions'

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
        default:
            return state;
    }
}

export default AuthReducer