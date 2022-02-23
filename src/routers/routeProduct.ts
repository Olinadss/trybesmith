import { Router } from 'express';
import { controlerCreateProduct, controlerGetAllProducts } from '../controllers/productConstroller';
import { nameValidation, amountValidation } from '../middleware/productValidation';
import verifyToken from '../middleware/auth';

const router = Router();

router.post(
  '/products',
  verifyToken,
  nameValidation,
  amountValidation,
  controlerCreateProduct,
);

router.get('/products', verifyToken, controlerGetAllProducts);

export default router;