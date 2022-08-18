export const SELECT_LIBRO = 'SELECT_LIBRO'
export const FILTERED_LIBRO = 'FILTERED_LIBRO'
export const FILTERED_BY_CATEGORY = 'FILTERED_BY_CATEGORY'



export const selectLibro = (id) => ({
    type: SELECT_LIBRO,
    libroID: id,
})

export const filteredLibros = (id) => ({
    type: FILTERED_LIBRO,
    autorID: id
})

export const filteredByCategory = (id) => ({
    type: FILTERED_BY_CATEGORY,
    categoriaID: id
})

