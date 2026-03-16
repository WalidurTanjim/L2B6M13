import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
     port: process.env.PORT,
     pg_connection_string: process.env.PG_CONNECTION_STRING,
     jwt_secret: process.env.JWT_SECRET
}

export default config;