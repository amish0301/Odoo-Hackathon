export class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const ErrorHandler = (err, req, res, next) => {
  // default errors
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  return res.status(err.statusCode).json({ message: err.message });
};
