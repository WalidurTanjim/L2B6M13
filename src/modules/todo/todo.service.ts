import { pool } from "../../config/db"

// POST method
const createTodo = async(user_id: string, title: string) => {
     const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title]);

     return result;
}

// GET method
const getAllTodos = async() => {
     const result = await pool.query(`SELECT * FROM todos`);

     return result;
}

const getTodoById = async(id: string) => {
     const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [id]);

     return result;
}

// DELETE method
const deleteTodoById = async(id: string) => {
     const result = await pool.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [id]);

     return result;
}

// PUT method
const updateTodoById = async(user_id: string, title: string, id: string) => {
     const result = await pool.query(`UPDATE todos SET user_id=$1, title=$2 WHERE id=$3 RETURNING *`, [user_id, title, id]);

     return result;
}

export const todoServices = {
     createTodo,
     getAllTodos,
     getTodoById,
     deleteTodoById,
     updateTodoById
}