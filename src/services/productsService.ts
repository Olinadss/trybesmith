import { IProducts } from '../interfaces/products';
import { modelCreateProduct, modelAllProduct } from '../models/userProduct';

const serviceCreateProduct = async (product: IProducts) => {
  const newProduct = await modelCreateProduct(product);

  return newProduct;
};

const serviceGetAllProducts = async () => {
  const products = await modelAllProduct();

  return products;
};

export {
  serviceCreateProduct,
  serviceGetAllProducts,
};
