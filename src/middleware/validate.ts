import { NextFunction, Request, Response } from 'express-serve-static-core';
import { ValidationChain, validationResult } from 'express-validator';

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Выполняем все проверки
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    next();
  };
};

export default validate;
