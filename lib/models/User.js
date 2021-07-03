const pool = require('../../pool');

module.exports = class User{

    constructor(email, hash){
        this.email = email;
        this.hash = hash;
    }

    static async createUser({email, hash}){
        const user = await pool.query(`
        INSERT INTO users(email, hash)
        VALUES ($1, $2)
        RETURNING *
        `, [email, hash]);

        return new User(user.rows[0])
    }
}