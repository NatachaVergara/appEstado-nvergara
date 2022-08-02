export const SELECT_LIBRO = 'SELECT_LIBRO'
export const FILTERED_LIBRO = 'FILTERED_LIBRO'


export const selectLibro = (id) => ({
    type: SELECT_LIBRO,
    libroID: id,
})

export const filteredLibros = (id) => ({
    type: FILTERED_LIBRO,
    autorID: id
})