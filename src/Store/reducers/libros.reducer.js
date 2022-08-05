import { libros } from '../../Data/libros'

import { SELECT_LIBRO, FILTERED_LIBRO } from '../actions/libros.action'


const initialState = {
    libros: libros,
    filteredLibros: [],
    selected: null
}

const LibrosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LIBRO:
            return {
                ...state,
                selected: state.libros.find(libro => libro.id === action.libroID)
            }
        case FILTERED_LIBRO:
            return {
                ...state,
                filteredLibros: state.libros.filter(libro => libro.autorID === action.autorID)
            }
        default:
            return state
    }


}

export default LibrosReducer