import logger from "morgan";
import ApplicationError from "./../utils/ApplicationError"
export default function ErrorHandler(err, req, res, next) {
  // create response
  if (err instanceof ApplicationError) {
    res.status(400);
  } else {
    res.status(500);
  }

  res.json({
    status: err.status,
    message: err.message,
  });
}
