import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (field = 'id', sort: 'asc' | 'desc' = 'desc') => {
  return await prisma.user.findMany({
    orderBy: { [field]: sort }
  });
};

export const getActive = async (field = 'id', sort: 'asc' | 'desc' = 'desc') => {
  return await prisma.user.findMany({
    orderBy: { [field]: sort },
    where: { deleted_at: null }
  });
};

export const getWhere = async (
  condition: Prisma.UserWhereInput,
  field = 'id',
  sort: 'asc' | 'desc' = 'desc'
) => {
  return await prisma.user.findMany({
    orderBy: { [field]: sort },
    where: condition
  });
};

export const getWhereIn = async (
  ids: number[],
  field = 'id',
  sort: 'asc' | 'desc' = 'desc'
) => {
  return await prisma.user.findMany({
    orderBy: { [field]: sort },
    where: {
      [field]: {
        in: ids
      }
    }
  });
};

export const find = async (id: number) => {
  return await prisma.user.findFirst({
    where: { id }
  });
};

export const findUnique = async (condition: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.findUnique({
    where: condition
  });
};

export const findWhere = async (condition: Prisma.UserWhereInput) => {
  return await prisma.user.findFirst({
    where: condition
  });
};

export const create = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data
  });
};

export const createMany = async (data: Prisma.UserCreateInput[]) => {
  return await prisma.user.createMany({
    data
  });
};

export const update = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({ data, where: { id } });
};

export const updateWhere = async (
  condition: Prisma.UserWhereInput,
  data: Prisma.UserUpdateInput
) => {
  return await prisma.user.updateMany({ data, where: condition });
};

export const updateWhereIn = async (field: string, values: any[], data: Prisma.UserUpdateInput) => {
  return await prisma.user.updateMany({
    data,
    where: {
      [field]: { in: values }
    }
  });
};

export const softDelete = async (id: number) => {
  return await prisma.user.update({
    data: { deleted_at: Math.floor(Date.now() / 1000) },
    where: { id }
  });
};

export const hardDelete = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  });
};
