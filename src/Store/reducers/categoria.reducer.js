import { categorias } from '../../Data/categorias'
import { CATEGORIA } from '../actions/categoria.action'


const initialState = {
    categorias: categorias,
    selected: null,
}

const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {

        case CATEGORIA:
            const IndexCategoria = state.categorias.findIndex(categoria => categoria.id === action.categoriaID)
            
            return {
                ...state,
                selected: state.categorias[IndexCategoria],

            }

        default:
            return state
    }
}

export default CategoriaReducer