import express from "express";
import { myInfo, register } from "../controller/user.controller.js";
const router = express.Router();

router.post('/signup', register);

router.get('/my-info', myInfo);

export default router;
