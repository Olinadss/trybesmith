import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controllers/statusCode';
import { IProducts } from '../interfaces/products';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const product: IProducts = req.body;

  const MIN_CHARACTER = 3;

  const { name } = product;

  if (!name) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Name is required' });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Name must be a string' });
  }
  
  if (name.length < MIN_CHARACTER) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount }: IProducts = req.body;
  const MIN_CHARACTER = 3;

  if (!amount) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Amount is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Amount must be a string' });
  }
  if (amount.length < MIN_CHARACTER) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export {
  nameValidation,
  amountValidation,
};
