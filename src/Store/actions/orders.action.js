import { URL_API } from '../../Constants/database'
export const GET_ORDERS = 'GET_ORDERS'
export const DELETE_ORDERS = 'DELETE_ORDERS'

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                headers: { 'Content-Type': 'application/json' }
            });
            const result = await response.json();
            console.log('Get orders.action*********', result)


            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
            }));

            console.log(orders)

            dispatch({
                type: GET_ORDERS,
                payload: orders,
            })

        } catch (error) {
            console.log('getOrders.actions', error.message)
        }
    }
}


export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch({
                type: DELETE_ORDERS,
                orderID: id
            })



        } catch (error) {
            console.log('Order.actions', error.message)
        }

    }




}