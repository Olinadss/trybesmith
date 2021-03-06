import { Router } from 'express';
import constrollerCreateUser from '../controllers/userController';
import { classeValidation, levelValidation,
  passwordValidation, usernameValidation } from '../middleware/usersValidation';

const router = Router();

router.post(
  '/users',
  usernameValidation,
  classeValidation, 
  levelValidation, 
  passwordValidation, 
  constrollerCreateUser,
);

export default router;