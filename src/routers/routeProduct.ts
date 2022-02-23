import { Router } from 'express';
import controlerCreateProduct from '../controllers/constroller';

const router = Router();

router.post(
  '/products',
  controlerCreateProduct,
);

export default router;