import { ApiError } from "../error/ErrorHandler.js";
import { TryCatch } from "../utility/trycatch.js";


export const myInfo = TryCatch(async (req, res, next) => {
  return next(new ApiError(401, "Unauthorized"));
});
