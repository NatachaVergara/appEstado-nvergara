import { URL_API } from '../../Constants/database'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_CARRITO = ' CONFIRM_CARRITO'


export const addItem = (item) => ({
    type: ADD_ITEM,
    item
})

export const removeItem = (itemID) => ({
    type: REMOVE_ITEM,
    itemID
})


export const confirmCarrito = (payload, total, userId, infoCompra) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total,
                    userId,
                    infoCompra
                }),
            })

            const result = await response.json()
            console.log(result)

            dispatch({
                type: CONFIRM_CARRITO,
                confirm: true
            });
        } catch (error) {
            console.log('carrito.action', error.message)
        }
    }
}

