import { IProducts } from '../interfaces/products';
import modelCreateProduct from '../models/userProduct';

const serviceCreateProduct = async (product: IProducts) => {
  const newProduct = await modelCreateProduct(product);

  return newProduct;
};

export default serviceCreateProduct;
