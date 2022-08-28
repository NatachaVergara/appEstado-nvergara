import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('users.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, nombre TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL, email TEXT NOT NULL, cell TEXT NOT NULL, imagen TEXT NOT NULL)`,
                [],
                () => { resolve() },
                (_, err) => { reject(err); })
        })

    });

    return promise;
};


export const addUser = (
    userId,
    nombre,
    address,
    lat,
    lng,
    email,
    cell,
    imagen) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO users ( 
                userId,
                nombre,
                address,
                lat,
                lng,
                email,
                cell,
                imagen)
                VALUES (?,?,?,?,?,?,?,?)`,
                [userId,
                    nombre,
                    address,
                    lat,
                    lng,
                    email,
                    cell,
                    imagen],
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