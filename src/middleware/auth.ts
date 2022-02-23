import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import StatusCode from '../controllers/statusCode';

const secret = String(process.env.JWT_SECRET);
  
const jwtOptions: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '5h',
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Token not found' });
  }

  try {
    jwt.verify(token, secret, jwtOptions);

    return next();
  } catch (error) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
  }
};

export default verifyToken;
