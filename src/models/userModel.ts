import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, User } from '../interfaces/user';
import { Payload } from '../interfaces/payload';

const modelCreateUsers = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const [createUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = createUser;

  const userCreated: User = { id, username, classe, level, password };

  return userCreated;
};

const modelGetByName = async (username: string): Promise<Payload> => {
  const [user] = await connection.execute(
    'SELECT id, username FROM Trybesmith.Users WHERE username = ?',
    [username],
  );
  const [userSelect] = user as Payload[];

  return userSelect;
};

export { modelCreateUsers, modelGetByName };
