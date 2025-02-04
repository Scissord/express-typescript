import * as AuthController from '@/controllers/auth';
import validate from '@/middleware/validate';
import loginValidation from '@/validations/auth/login';
import { Router } from 'express';

const router = Router();

router.post('/login', validate(loginValidation), AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/refresh', AuthController.refresh);

export default router;
