const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: err.message
  });
};
module.exports = errorHandler;