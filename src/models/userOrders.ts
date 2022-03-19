import { OkPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders';
import connection from './connection';

const userCreateOrder = async (order: IOrder) => {
  const [orderCreated] = await connection.query<OkPacket>(
    'INSERT INTOTrybesmith.Products (userId) VALUES (?)',
    [order],
  );

  return orderCreated;
};

export default userCreateOrder;
