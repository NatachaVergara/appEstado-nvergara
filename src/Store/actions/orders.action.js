export const SELECT_ORDER = 'select_order'

export const selectOrder = (id) => ({
    type: SELECT_ORDER,
    orderID: id,
})