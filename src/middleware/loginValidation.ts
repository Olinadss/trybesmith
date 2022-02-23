import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controllers/statusCode';
import { User } from '../interfaces/user';
import { Login } from '../services/loginService';
import { modelGetByUser } from '../models/userModel';

const validationLogin = async (req: Request, res: Response, next: NextFunction) => {
  const login: Login = req.body;

  try {
    const { password }: User = await modelGetByUser(login.username);

    if (password !== login.password) {
      return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Username or password invalid' });
    }

    next();
  } catch (error) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Username or password invalid' });
  }
};

export default validationLogin;
