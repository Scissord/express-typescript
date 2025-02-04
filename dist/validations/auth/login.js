"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_validator_1 = require("express-validator");
const prisma = new client_1.PrismaClient();
const loginValidation = [
    (0, express_validator_1.body)('name')
        .isString()
        .withMessage('Имя должно быть строкой')
        .trim()
        .notEmpty()
        .withMessage('Имя не должно быть пустым')
        .custom(value => {
        return value.replace(/\s+/g, '');
    })
        .withMessage('Имя не должно содержать пробелы'),
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Некорректный email')
        .custom(async (value) => {
        const user = await prisma.user.findUnique({ where: { email: value } });
        if (user) {
            throw new Error('Email уже используется');
        }
        return true;
    })
    // body('age').optional().isInt({ min: 0 }).withMessage('Возраст должен быть числом не меньше 0')
];
exports.default = loginValidation;
//# sourceMappingURL=login.js.map