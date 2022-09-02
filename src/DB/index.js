import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('users.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, nombre TEXT NOT NULL, email TEXT NOT NULL, direccion TEXT NOT NULL,  cell TEXT NOT NULL, image TEXT NOT NULL)`,
                [],
                () => { resolve() },
                (_, err) => { reject(err); })
        })

    

    //    const promise = new Promise((resolve, reject) => {
    //     db.transaction(tx => {
    //         tx.executeSql(`
    //             DROP TABLE users`,
    //             [],
    //             () => { resolve() },
    //             (_, err) => { reject(err); })
    //     })

    });

    return promise;
};


export const addUser = (
    userId,
    nombre,
    email,
    direccion,
    cell,
    image
) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO users ( 
                userId,
                nombre,                
                email,
                direccion,
                cell,
                image
                )
                VALUES (?,?,?,?,?,?)`,
                [userId,
                    nombre,
                    email,
                    direccion,
                    cell,
                    image
                ],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })

    return promise
}


export const fetchUsers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM users`,
                [],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })
    return promise
}

export const deleteUser = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`DELETE FROM users WHERE id = ${id}`, [],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })
    return promise
}