import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controllers/statusCode';
import { IUser } from '../interfaces/user';

const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const MIN_CHARACTER = 3;

  const { username } = user;

  if (!username) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Username is required' });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Username must be a string' });
  }
  
  if (username.length > MIN_CHARACTER) {
    return res.status(422)
      .json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

const classeValidation = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const MIN_CHARACTER = 3;

  const { classe } = user;

  if (!classe) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Classe is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Classe must be a string' });
  }

  if (classe.length > MIN_CHARACTER) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const MIN_CHARACTER = 1;

  const { level } = user;

  if (!level) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Level is required' });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Level must be a number' });
  }

  if (level > MIN_CHARACTER) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Level must be greater than 0' });
  }

  next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const MIN_CHARACTER = 8;

  const { password } = user;

  if (!password) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Password is required' });
  }

  if (typeof password !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Password must be a string' });
  }

  if (password.length > MIN_CHARACTER) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export {
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
};
