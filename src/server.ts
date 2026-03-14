import express, { Request, Response } from "express";
import config from "./config";

const app = express()
const port = config.port || 5000;

// parser
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next Level Developers 😒');
})

app.listen(port, () => {
  console.log(`L2B6M13 app listening on port ${port}`)
})
