"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const User = __importStar(require("@/models/user"));
const express_validator_1 = require("express-validator");
const createUserValidation = [
    (0, express_validator_1.body)('login')
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
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Некорректный email')
        .isLength({ max: 255 })
        .withMessage('Почта не должна превышать 255 символов')
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.findUnique({ email: value });
        if (user) {
            throw new Error('Email уже используется');
        }
        return true;
    }))
];
exports.default = createUserValidation;
