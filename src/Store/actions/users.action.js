export const SELECT_USUARIO = 'SELECT_USUARIO'

export const selectUsuario = (id) => (
   
    {
        type: SELECT_USUARIO,
        userId: id
    })