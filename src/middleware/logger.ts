import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} ${req.url} ${req.baseUrl} ${req.originalUrl}`);
     next();
};

export default logger;