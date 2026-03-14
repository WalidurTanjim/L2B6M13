import { pool } from "../../config/db";

// POST method
const createUser = async(name: string, email: string) => {
     const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);

     return result;
};

// GET method
const getAllUsers = async() => {
     const result = await pool.query(`SELECT * FROM users`);

     return result;
}

const getUserById = async(id: string) => {
     const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);

     return result;
}

// DELETE method
const deleteUserById = async(id: string) => {
     const result = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [id]);

     return result;
}

export const userServices = {
     createUser,
     getAllUsers,
     getUserById,
     deleteUserById,
}