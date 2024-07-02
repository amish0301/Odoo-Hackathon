import path from "path";
import dotenv from "dotenv";
dotenv.config({path : path.resolve("__dirname", "..", ".env")});

const config = {
  port: process.env.SERVER_PORT || 5000,
  dbUri: process.env.DB_URI,
};

export default config;