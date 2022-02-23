import { modelGetByName } from '../models/userModel';
import createToken from './jwt';

export type Login = {
  username: string
  password: string
};

const verifyLogin = async (login: Login) => {
  const { username } = login;

  const user = await modelGetByName(username);

  const token = createToken(user);

  return token;
};

export default verifyLogin;
