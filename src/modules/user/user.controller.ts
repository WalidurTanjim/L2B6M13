import { Request, Response } from "express";
import { userServices } from "./user.service";

// POST method
const createUser = async(req: Request, res: Response) => {
     const { name, email, password } = await req?.body;

     if(!name || !email || !password) {
          return res.status(400).json({
               success: false,
               message: "Valid name, email & password required",
               data: null
          });
     }

     try{
          const result = await userServices.createUser(req?.body);

          res.status(201).json({
               success: true,
               message: "User insert successfully",
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
const getAllUsers = async(req: Request, res: Response) => {
     try{
          const result = await userServices.getAllUsers();

          if(result?.rows.length > 0) {
               res.status(200).json({
                    success: false,
                    message: "Users fetched successfully",
                    data: result?.rows
               });
          }else{
               res.status(404).json({
                    success: false,
                    message: "Users not found",
                    data: null
               });
          }
     }catch(err: any) {
          res.status(500).json({
               success: false,
               message: "Something went wrong!",
               data: null
          });
     }
}

const getUserById = async(req: Request, res: Response) => {
     const { id } = req?.params;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid id is required",
               data: null
          });
     }

     try{
          const result = await userServices.getUserById(id as string);

          if(result?.rows.length > 0){
               res.status(200).json({
                    success: true,
                    message: "User fetched successfully",
                    data: result?.rows[0]
               });
          }else{
               res.status(404).json({
                    success: false,
                    message: "User not found!",
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
const deleteUserById = async(req: Request, res: Response) => {
     const { id } = req?.params;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid id is required",
               data: null
          });
     }

     try{
          const result = await userServices.deleteUserById(id as string);

          if(result?.rowCount === 0) {
               res.status(404).json({
                    success: false,
                    message: "User not found!",
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
const updateUserById = async(req: Request, res: Response) => {
     const { id } = req?.params;
     const { name, email } = await req?.body;

     if(!id) {
          return res.status(400).json({
               success: false,
               message: "Valid id is required",
               data: null
          });
     }

     if(!name || !email) {
          return res.status(400).json({
               success: false,
               message: "Valid name & email is required",
               data: null
          });
     }

     try{
          const result = await userServices.updateUserById(id as string, req?.body);

          if(result?.rowCount === 0){
               res.status(404).json({
                    success: false,
                    message: "User not found!",
                    data: null
               });
          }else{
               res.status(201).json({
                    success: true,
                    message: "User updated successfully",
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

export const userControllers = {
     createUser,
     getAllUsers,
     getUserById,
     deleteUserById,
     updateUserById
};
