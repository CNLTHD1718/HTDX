var DbFunction = require('../fn/sqlite3-db');
class UserRepo {
    constructor() {
        this.createTable();
    }

    createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS User (
             Id INTEGER PRIMARY KEY AUTOINCREMENT,
             Name TEXT,
             Username TEXT,
             Password TEXT,
             Email TEXT,
             Address TEXT,
             rfToken TEXT,
             rfTokenTime INTERGER,
             Lat REAL,
             Lng REAL,
             Status INTERGER,
             Type INTERGER
         ) `;
        return DbFunction.run(sql);
    }

    insert(obj) {
        return DbFunction.run(`INSERT INTO User  (Name, Username,Password,Email,Address,Status,INTERGER) 
                               VALUES (?,?,?,?,?,?,?)`,
            [obj.Name, obj.Username, obj.Password, obj.Email, obj.Address, 0,obj,Type]);
    }
    load(id) {
        return DbFunction.getOne(`SELECT * FROM User WHERE Id = ?`, [id])
    }
    loadAll() {
        return DbFunction.getAll(`SELECT * FROM  User `);//Status != (-1)
    }
    login(obj) {
        return DbFunction.getOne(`SELECT * FROM User  WHERE Username = ? AND Password = ? `,
        [obj.Username, obj.Password]);
    }
    getByToken(id, token){
        return DbFunction.getOne(`SELECT * FROM User WHERE Id = ? AND rfToken = ?`,
        [id, token]);
    }
}

module.exports = new UserRepo();