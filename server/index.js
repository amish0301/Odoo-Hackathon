import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import config from "./config/config.js";
import { ErrorHandler } from "./error/ErrorHandler.js";
import userRoutes from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDB(config.dbUri);

app.use('/api/users', userRoutes);

app.use(ErrorHandler);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
