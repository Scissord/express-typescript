import * as User from '@/models/user';
import { body } from 'express-validator';

const createUserValidation = [
  body('login')
    .isString()
    .withMessage('Имя должно быть строкой')
    .trim()
    .notEmpty()
    .withMessage('Имя не должно быть пустым')
    .isLength({ max: 255 })
    .withMessage('Имя не должно превышать 255 символов')
    .custom(value => {
      if (/\s/.test(value)) {
        throw new Error('Имя не должно содержать пробелы');
      }
      return true;
    }),
  body('email')
    .isEmail()
    .withMessage('Некорректный email')
    .isLength({ max: 255 })
    .withMessage('Почта не должна превышать 255 символов')
    .custom(async value => {
      const user = await User.findUnique({ email: value });
      if (user) {
        throw new Error('Email уже используется');
      }
      return true;
    })
];

export default createUserValidation;
