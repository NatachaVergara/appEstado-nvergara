export const SELECT_ITEM = 'select_item'
export const FILTERED_ITEM = 'filter_item'

export const selectItem = (id) => ({
    type: SELECT_ITEM,
    itemID: id
})

