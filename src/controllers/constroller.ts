import { Request, Response } from 'express';
import { IProducts } from '../interfaces/products';
import serviceCreateProduct from '../services/productsService';
import StatusCode from './statusCode';

const controlerCreateProduct = async (req: Request, res: Response) => {
  const { name, amount }: IProducts = req.body;

  const newProduct = await serviceCreateProduct({ name, amount });

  const newProductCreated = {
    item: {
      id: newProduct,
      name,
      amount,
    },
  };

  return res.status(StatusCode.CREATED).json(newProductCreated);
};

export default controlerCreateProduct;
