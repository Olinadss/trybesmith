import { Request, Response } from 'express';
import verifyLogin, { Login } from '../services/loginService';
import StatusCode from './statusCode';

const controllerLogin = async (req: Request, res: Response) => {
  const userLogin: Login = req.body;

  const token = await verifyLogin(userLogin);

  return res.status(StatusCode.OK).json(token);
};

export default controllerLogin;
