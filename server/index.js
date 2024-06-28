import express from "express";
import cors from "cors";
import { setUpEnvironmentVariables } from "./Config/config.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

setUpEnvironmentVariables();

app.get("/", (req, res) => {
   return res.json({message: 'Helo from server'});
})

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});