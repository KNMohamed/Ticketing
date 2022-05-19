import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    return res.status(400).json({
      errors: err.errors.map((error) => {
        return { message: error.msg, field: error.param };
      }),
    });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(500).json({
      errors: [
        {
          message: err.reason || 'Database Connection Error',
        },
      ],
    });
  }

  console.log('Something went wrong', err);
  res.status(400).send({ errors: [{ message: err.message }] });
};
