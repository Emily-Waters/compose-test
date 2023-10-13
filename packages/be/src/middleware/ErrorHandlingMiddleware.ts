import { ErrorRequestHandler } from "express";

export const ErrorHandlingMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(err);
  res.end(500);
};
