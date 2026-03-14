import express, { Request, Response } from "express";
import dotenv from "dotenv";
// import { Pool } from "pg";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express()
const port = process.env.PORT || 5000;

// parser
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next Level Developers 😒');
})

app.listen(port, () => {
  console.log(`L2B6M13 app listening on port ${port}`)
})
