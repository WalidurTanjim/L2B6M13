import { Request, Response } from "express";
import { authService } from "./auth.service";

// POST method
const loginUser = async(req: Request, res: Response) => {
     const { email, password } = await req?.body;

     if(!email || !password) {
          return res.status(400).json({
               success: false,
               message: "Valid email & password is required",
               data: null
          });
     }

     try{
          const result = await authService.loginUser(email, password);

          console.log(result);

          // invalid email
          if(result === null) {
               res.status(500).json({
                    success: false,
                    message: "Invalid email",
                    data: null
               });
          }

          // invalid password
          if(result === false) {
               res.status(500).json({
                    success: false,
                    message: "Invalid password",
                    data: null
               });
          }

          res.status(200).json({
               success: true,
               message: "Login successful",
               data: result
          });
     }catch(err: any) {
          console.error(err?.message);

          res.status(500).json({
               success: false,
               message: "Something went wrong!",
               data: null
          });
     }
}

export const authControllers = {
     loginUser,
}