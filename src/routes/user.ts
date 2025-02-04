import * as AuthController from '@/controllers/user';
import validate from '@/middleware/validate';
import createUserValidation from '@/validations/user/create';
import { Router } from 'express';

const router = Router();

router.post('', validate(createUserValidation), AuthController.create);
router.get('', AuthController.get);
router.patch('/:id', AuthController.update);
router.delete('/:id', AuthController.softDelete);

export default router;
