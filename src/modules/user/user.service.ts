import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

// POST method
const createUser = async(payload: Record<string, unknown>) => {
     const {name, email, password} = payload;

     // hash password
     const hashedPasword = await bcrypt.hash(password as string, 10);

     const result = await pool.query(`INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`, [name, email, hashedPasword]);

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

// PUT method 
const updateUserById = async(id: string, payload: Record<string, unknown>) => {
     const {name, email} = payload;

     const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, id]);

     return result;
}

export const userServices = {
     createUser,
     getAllUsers,
     getUserById,
     deleteUserById,
     updateUserById
}