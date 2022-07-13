import { Express } from 'express-serve-static-core';

export interface UserPayload {
  id: string;
  email: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    currentUser?: UserPayload;
  }
}
