import { Request, Response } from "express";
import { pool } from "../../config/db";
import { todoServices } from "./todo.service";

// POST method
const createTodo = async(req: Request, res: Response) => {
     const { user_id, title } = await req?.body;

     if(!user_id || !title) {
          return res.status(400).json({
               success: false,
               message: "User Id & Title is required",
               data: null
          });
     }

     try{
          const result = await todoServices.createTodo(user_id, title);

          res.status(201).json({
               success: true,
               message: "Todo inserted succssfully",
               data: result?.rows[0]
          });
     }catch(err: any) {
          res.status(500).json({
               success: false,
               message: "Something went wrong!",
               data: null
          });

          console.error(err);
          console.error(err?.message);
     }
}

export const todoControllers = {
     createTodo,
}