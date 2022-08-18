
import { ADD_DIRECCION } from '../actions/info_envios.action'

const initialState = {
    infoEnvios: null,

}

const InfoEnvios = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIRECCION:
            return {
                ...state,
                infoEnvios: action.dir
            }
        default: return state
    }
}




export default InfoEnvios