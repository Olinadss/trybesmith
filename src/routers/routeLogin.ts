import { Router } from 'express';
import controllerLogin from '../controllers/loginController';
import { passwordValidation, usernameValidation } from '../middleware/usersValidation';
import validationLogin from '../middleware/loginValidation';

const router = Router();

router.post(
  '/login',
  usernameValidation, 
  passwordValidation,
  validationLogin,
  controllerLogin, 
);

export default router;