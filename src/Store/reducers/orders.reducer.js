
import { GET_ORDERS, DELETE_ORDERS } from '../actions/orders.action'



const initialState = {
    orders: []
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
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