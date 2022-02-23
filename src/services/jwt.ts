import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Payload } from '../interfaces/payload';

// type Payload = {
//   id: number
//   username: string,
// };

const createToken = async (payload: Payload) => {
  const secret = String(process.env.JWT_SECRET); // https://dev.to/vitordelfino/autenticacao-com-jwt-22o7
  
  const jwtOptions: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  const token = jwt.sign(payload, secret, jwtOptions);

  return { token };
};

export default createToken;
