import { Request, Response } from 'express';
import { IProducts } from '../interfaces/products';
import { serviceCreateProduct, serviceGetAllProducts } from '../services/productsService';
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

const controlerGetAllProducts = async (_req: Request, res: Response) => {
  const products = await serviceGetAllProducts();

  return res.status(StatusCode.OK).json(products);
};

export {
  controlerCreateProduct,
  controlerGetAllProducts,
};
