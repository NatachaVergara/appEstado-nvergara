
import { GET_ORDERS, DELETE_ORDERS } from '../actions/orders.action'



const initialState = {
    orders: [],

}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            // console.log('action.payload',action.payload)
            return {
                ...state,
                orders: action.payload,
            }
        case DELETE_ORDERS:
            return {
                ...state,
                orders: orders.filter(order => order.id !== action.orderID)
            }
        default:
            return state
    }
}

export default OrdersReducer;