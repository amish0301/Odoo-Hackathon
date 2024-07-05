import jwt from "jsonwebtoken";
import config from "../config/config.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 1000 * 60 * 60 * 24 * 7,
  sameSite: "none",
};

const generateToken = async (res, statusCode, message, user) => {
  const token = jwt.sign({ _id: user._id }, config.jwt_secret);

  return res
    .status(statusCode)
    .cookie(config.token_name, token, cookieOptions)
    .json({
      success: true,
      message,
    });
};

export default generateToken;
