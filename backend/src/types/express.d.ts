import type { UserClaims } from '../middlewares/auth.middleware';

declare global {
  namespace Express {
    interface Request {
      user?: UserClaims;
      correlationId?: string;
    }
  }
}

export {};
