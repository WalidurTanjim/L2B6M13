import { Request, Response } from "express";
import { userServices } from "./user.service";

// POST method
const createUser = async(req: Request, res: Response) => {
     const { name, email } = await req?.body;

     if(!name || !email) {
          return res.status(400).json({
               success: false,
               message: "Valid name & email required",
               data: null
          });
     }

     try{
          const result = await userServices.createUser(name, email);

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

export const userControllers = {
     createUser,
};
