import {orders} from '../../Data/orders'
import {SELECT_ORDER} from '../actions/orders.action'

const initialState = {
    orders: orders,
      // filteredOrder: [],
    selected:null
}

const OrdersReducer = (state = initialState, action)=>{
   switch (action.type) {
    case SELECT_ORDER:
        return{
            ...state, 
            selected: state.orders.find(order=> order.id === action.orderID)
        }
    default:
        return state
   }
}

export default OrdersReducer