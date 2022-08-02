import {createStore, combineReducers} from 'redux'

//reducers
import AutoresReducer from './reducers/autores.reducer'
import LibrosReducer from './reducers/libros.reducer'

const RootReducer = combineReducers({
    autores: AutoresReducer,
    libros: LibrosReducer
})

export default createStore(RootReducer)