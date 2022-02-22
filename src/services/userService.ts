import { IUser } from '../interfaces/user';
import modelCreateUsers from '../models/userModel';
import createToken from './jwt';

const serviceCreateUser = async (user: IUser) => {
  const userCreated = await modelCreateUsers(user);

  const token = createToken(userCreated);

  return token;
};

export default serviceCreateUser;
