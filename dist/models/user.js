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
exports.hardDelete = exports.softDelete = exports.updateWhereIn = exports.updateWhere = exports.update = exports.createMany = exports.create = exports.findWhere = exports.findUnique = exports.find = exports.getWhereIn = exports.getWhere = exports.getActive = exports.getAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAll = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (field = 'id', sort = 'desc') {
    return yield prisma.user.findMany({
        orderBy: { [field]: sort }
    });
});
exports.getAll = getAll;
const getActive = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (field = 'id', sort = 'desc') {
    return yield prisma.user.findMany({
        orderBy: { [field]: sort },
        where: { deleted_at: null }
    });
});
exports.getActive = getActive;
const getWhere = (condition_1, ...args_1) => __awaiter(void 0, [condition_1, ...args_1], void 0, function* (condition, field = 'id', sort = 'desc') {
    return yield prisma.user.findMany({
        orderBy: { [field]: sort },
        where: condition
    });
});
exports.getWhere = getWhere;
const getWhereIn = (ids_1, ...args_1) => __awaiter(void 0, [ids_1, ...args_1], void 0, function* (ids, field = 'id', sort = 'desc') {
    return yield prisma.user.findMany({
        orderBy: { [field]: sort },
        where: {
            [field]: {
                in: ids
            }
        }
    });
});
exports.getWhereIn = getWhereIn;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findFirst({
        where: { id }
    });
});
exports.find = find;
const findUnique = (condition) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findUnique({
        where: condition
    });
});
exports.findUnique = findUnique;
const findWhere = (condition) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findFirst({
        where: condition
    });
});
exports.findWhere = findWhere;
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.create({
        data
    });
});
exports.create = create;
const createMany = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.createMany({
        data
    });
});
exports.createMany = createMany;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.update({ data, where: { id } });
});
exports.update = update;
const updateWhere = (condition, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.updateMany({ data, where: condition });
});
exports.updateWhere = updateWhere;
const updateWhereIn = (field, values, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.updateMany({
        data,
        where: {
            [field]: { in: values }
        }
    });
});
exports.updateWhereIn = updateWhereIn;
const softDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.update({
        data: { deleted_at: Math.floor(Date.now() / 1000) },
        where: { id }
    });
});
exports.softDelete = softDelete;
const hardDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.delete({
        where: { id }
    });
});
exports.hardDelete = hardDelete;
