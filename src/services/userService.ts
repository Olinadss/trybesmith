import { IUser } from '../interfaces/user';
import modelCreateUsers from '../models/userModel';

const serviceCreateUser = async (user: IUser) => {
  const userCreate = await modelCreateUsers(user);

  return userCreate;
};

export default serviceCreateUser;
