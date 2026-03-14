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

// GET method
const getAllTodos = async(req: Request, res: Response) => {
     try{
          const result = await todoServices.getAllTodos();

          if(result?.rows.length > 0){
               res.status(200).json({
                    success: true,
                    message: "Todos fetched successfully",
                    data: result?.rows
               });
          }else{
               res.status(404).json({
                    success: false,
                    message: "Todos not found!",
                    data: null
               });
          }
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

const getTodoById = async(req: Request, res: Response) => {
     const { id } = req?.params;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid Id is required",
               data: null
          });
     }

     try{
          const result = await todoServices.getTodoById(id as string);

          if(result?.rows.length > 0){
               res.status(200).json({
                    success: true,
                    message: "Todo fetched successfully",
                    data: result?.rows[0]
               });
          }else{
               res.status(404).json({
                    success: false,
                    message: "Todo not found!",
                    data: null
               });
          }
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

// DELETE method
const deleteTodoById = async(req: Request, res: Response) => {
     const { id } = req?.params;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid id is required",
               data: null
          });
     }

     try{
          const result = await todoServices.deleteTodoById(id as string);

          if(result?.rowCount === 0) {
               res.status(404).json({
                    success: false,
                    message: "Todo not found!",
                    data: null
               });
          }

          res.status(204).send();
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

// PUT method
const updateTodoById = async(req: Request, res: Response) => {
     const { id } = req?.params;
     const { user_id, title } = await req?.body;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid id is required",
               data: null
          })
     }

     if(!user_id || !title) {
          return res.status(400).json({
               success: false,
               message: "Valid user id & title is required",
               data: null
          })
     }

     try{
          const result = await todoServices.updateTodoById(user_id, title, id as string);

          if(result?.rowCount === 0){
               res.status(404).json({
                    success: false,
                    message: "Todo not found!",
                    data: null
               });
          }else{
               res.status(201).json({
                    success: true,
                    message: "Todo updated successfully",
                    data: result?.rows[0]
               });
          }
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
     getAllTodos,
     getTodoById,
     deleteTodoById,
     updateTodoById
}