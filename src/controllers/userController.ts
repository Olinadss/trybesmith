import { Request, Response } from 'express';
import { IUser } from '../interfaces/user';
import serviceCreateUser from '../services/userService';
import StatusCode from './statusCode';

const constrollerCreateUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;

  const userCreated = await serviceCreateUser(user);

  return res.status(StatusCode.CREATED).json(userCreated);
};

export default constrollerCreateUser;