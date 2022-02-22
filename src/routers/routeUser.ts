import { Router } from 'express';
import constrollerCreateUser from '../controllers/userController';

const router = Router();

router.post('/users', constrollerCreateUser);

export default router;