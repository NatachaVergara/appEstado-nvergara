
import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CARRITO } from '../actions/carrito.action'

const initialState = {
    carrito: [],
    total: 0
}

const sumTotal = (carrito) => carrito
    .map(item => item.cantidad * item.precio)
    .reduce((a, b) => a + b, 0);


const CarritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let updateCarrito = []
            if (state.carrito.find(item => item.id === action.item.id)) {
                updateCarrito = state.carrito.map(item => {
                    if (item.id === action.item.id) item.cantidad++;
                    return item;
                })
            } else {
                const item = { ...action.item, cantidad: 1 }
                updateCarrito = [...state.carrito, item]
            }
            
            return {
                ...state,
                carrito: updateCarrito,
                total: sumTotal(updateCarrito)
            };
        case REMOVE_ITEM:
            const carritoFiltrado = state.carrito.filter(item => item.id !== action.itemID)
            return {
                ...state,
                carrito: carritoFiltrado,
                total: sumTotal(carritoFiltrado)
            }
        case CONFIRM_CARRITO:
            return {
                state
            }
        default:
            return state
    }


}

export default CarritoReducer