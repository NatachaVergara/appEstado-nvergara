import { carrito } from '../../Data/carrito'
import { SELECT_ITEM } from '../actions/carrito.action'

const initialState = {
    carrito: carrito,
    filteredCarrito: [],
    selected: null
}

const CarritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return {
                ...state,
                selected: state.carrito.find(item => item.id === action.itemId)
            }
        default:
            return state
    }


}

export default CarritoReducer