import { autores } from '../../Data/autores'
import { SELECT_AUTOR } from '../actions/autores.action'

const initialState = {
    autores: autores,
    selected: null
}

const AutoresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_AUTOR:
            const IndexAutor = state.autores.findIndex(autor => autor.id === action.autorID)
            // if (IndexAutor === 2) return state
            return {
                ...state,
                selected: state.autores[IndexAutor]
            }
        default:
            return state
    }
}

export default AutoresReducer