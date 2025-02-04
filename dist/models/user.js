"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDelete = exports.softDelete = exports.updateWhereIn = exports.updateWhere = exports.update = exports.createMany = exports.create = exports.findWhere = exports.findUnique = exports.find = exports.getWhereIn = exports.getWhere = exports.getActive = exports.getAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAll = async (field = 'id', sort = 'desc') => {
    return await prisma.user.findMany({
        orderBy: { [field]: sort }
    });
};
exports.getAll = getAll;
const getActive = async (field = 'id', sort = 'desc') => {
    return await prisma.user.findMany({
        orderBy: { [field]: sort },
        where: { deleted_at: null }
    });
};
exports.getActive = getActive;
const getWhere = async (condition, field = 'id', sort = 'desc') => {
    return await prisma.user.findMany({
        orderBy: { [field]: sort },
        where: condition
    });
};
exports.getWhere = getWhere;
const getWhereIn = async (ids, field = 'id', sort = 'desc') => {
    return await prisma.user.findMany({
        orderBy: { [field]: sort },
        where: {
            [field]: {
                in: ids
            }
        }
    });
};
exports.getWhereIn = getWhereIn;
const find = async (id) => {
    return await prisma.user.findFirst({
        where: { id }
    });
};
exports.find = find;
const findUnique = async (condition) => {
    return await prisma.user.findUnique({
        where: condition
    });
};
exports.findUnique = findUnique;
const findWhere = async (condition) => {
    return await prisma.user.findFirst({
        where: condition
    });
};
exports.findWhere = findWhere;
const create = async (data) => {
    return await prisma.user.create({
        data
    });
};
exports.create = create;
const createMany = async (data) => {
    return await prisma.user.createMany({
        data
    });
};
exports.createMany = createMany;
const update = async (id, data) => {
    return await prisma.user.update({ data, where: { id } });
};
exports.update = update;
const updateWhere = async (condition, data) => {
    return await prisma.user.updateMany({ data, where: condition });
};
exports.updateWhere = updateWhere;
const updateWhereIn = async (field, values, data) => {
    return await prisma.user.updateMany({
        data,
        where: {
            [field]: { in: values }
        }
    });
};
exports.updateWhereIn = updateWhereIn;
const softDelete = async (id) => {
    return await prisma.user.update({
        data: { deleted_at: Math.floor(Date.now() / 1000) },
        where: { id }
    });
};
exports.softDelete = softDelete;
const hardDelete = async (id) => {
    return await prisma.user.delete({
        where: { id }
    });
};
exports.hardDelete = hardDelete;
//# sourceMappingURL=user.js.map