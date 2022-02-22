import { Request, Response } from 'express';
import StatusCode from '../controllers/statusCode';
import { IUser } from '../interfaces/user';

const usernameValidation = (req: Request, res: Response) => {
  const user: IUser = req.body;

  const { username } = user;

  if (!username) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Username is required' });
  }
};

export default usernameValidation;
