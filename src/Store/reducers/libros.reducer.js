import { libros } from '../../Data/libros'

import { SELECT_LIBRO, FILTERED_LIBRO, FILTERED_BY_CATEGORY } from '../actions/libros.action'





const initialState = {
    libros: libros,
    filteredLibros: [],
    filteredByCategory: [],
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
        case FILTERED_BY_CATEGORY:
            return {
                ...state,
                filteredByCategory: state.libros.filter(libro => libro.categoria === action.categoriaID)
            }
     
        default:
            return state
    }
}

export default LibrosReducer