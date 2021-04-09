import {Request, Response} from 'express';

const logMiddleware = (req: Request, res: Response, next: any) => {
  console.log('...');
  next();
};

export default logMiddleware;
