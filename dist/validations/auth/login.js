"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({ where: { email: value } });
        if (user) {
            throw new Error('Email уже используется');
        }
        return true;
    }))
    // body('age').optional().isInt({ min: 0 }).withMessage('Возраст должен быть числом не меньше 0')
];
exports.default = loginValidation;
