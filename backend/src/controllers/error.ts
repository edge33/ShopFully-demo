import { Request, Response, NextFunction } from 'express';

export const get404 = (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).send('Not found');
};
