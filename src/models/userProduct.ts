import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interfaces/products';
import connection from './connection';

const modelCreateProduct = async (product: IProducts) => {
  const { name, amount } = product;

  const [newProduct] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return newProduct.insertId;
};

export default modelCreateProduct;
