import { Router } from 'express';
import controlerCreateProduct from '../controllers/constroller';
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

export default router;