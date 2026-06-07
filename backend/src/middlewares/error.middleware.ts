import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { HttpError } from '../utils/http-error.js';

export const errorHandler = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.flatten()
    });
  }

  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      details: error.details
    });
  }

  const message = error instanceof Error ? error.message : 'Internal server error';

  return res.status(500).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== 'production' ? { stack: error instanceof Error ? error.stack : undefined } : {})
  });
};
