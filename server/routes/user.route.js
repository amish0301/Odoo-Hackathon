import express from "express";
import { myInfo } from "../controller/user.controller.js";
const router = express.Router();

router.post('/signup', )

router.get('/my-info', myInfo);

export default router;
