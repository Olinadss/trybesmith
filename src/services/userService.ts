import { IUser } from '../interfaces/user';
import { modelCreateUsers, modelGetByName } from '../models/userModel';
import createToken from './jwt';

const serviceCreateUser = async (user: IUser) => {
  const { username } = await modelCreateUsers(user);

  const payload = await modelGetByName(username);

  const token = createToken(payload);

  return token;
};

export default serviceCreateUser;
