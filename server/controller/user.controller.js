import { ApiError } from "../error/ErrorHandler.js";
import { TryCatch } from "../utility/trycatch.js";
import bcrypt from "bcryptjs";
import sendToken from "../auth/jwt.js";
import User from "../models/user.model.js";

// Sign-Up
export const register = TryCatch(async (req, res, next) => {
  const { username, password, name, role, mobileNumber, address } = req.body;

  // hashed password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create entry
  const user = await User.create({
    username,
    password: hashedPassword,
    name,
    role,
    mobileNumber,
    address,
    registeredAt: new Date(),
  });

  // now create jwt token
  sendToken(res, 200, "User registered successfully", user);
});

export const myInfo = TryCatch(async (req, res, next) => {
  return next(new ApiError(401, "Unauthorized"));
});
