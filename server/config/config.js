import path from "path";
import dotenv from "dotenv";
dotenv.config({path : path.resolve("__dirname", "..", ".env")});

const config = {
  port: process.env.SERVER_PORT || 5000,
  dbUri: process.env.DB_URI,
  jwt_secret: process.env.JWT_SECRET,
  token_name: process.env.TOKEN_NAME
};

export default config;