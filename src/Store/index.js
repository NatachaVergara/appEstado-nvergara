import { createStore, combineReducers } from 'redux'

//reducers
import AutoresReducer from './reducers/autores.reducer'
import LibrosReducer from './reducers/libros.reducer'
import CarritoReducer from './reducers/carrito.reducer'
const RootReducer = combineReducers({
    autores: AutoresReducer,
    libros: LibrosReducer,
    carrito: CarritoReducer
   
})

export default createStore(RootReducer)