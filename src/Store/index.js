import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import AutoresReducer from './reducers/autores.reducer'
import LibrosReducer from './reducers/libros.reducer'
import CarritoReducer from './reducers/carrito.reducer'
import OrdersReducer from './reducers/orders.reducer'
const RootReducer = combineReducers({
    autores: AutoresReducer,
    libros: LibrosReducer,
    carrito: CarritoReducer,
    orders: OrdersReducer

})

export default createStore(RootReducer, applyMiddleware(thunk))