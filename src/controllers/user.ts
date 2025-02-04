import { Request, Response } from 'express-serve-static-core';
import { Prisma, User as IUser } from '@prisma/client';
import * as User from '@/models/user';

export const create = async (
  req: Request<{}, {}, Prisma.UserCreateInput>,
  res: Response<IUser>
) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const get = async (req: Request<{}, {}, {}>, res: Response<IUser[]>) => {
  const users = await User.getActive();
  res.status(200).json(users);
};

export const update = async (
  req: Request<{ id: string }, {}, Prisma.UserUpdateInput>,
  res: Response<IUser>
) => {
  const user = await User.update(+req.params.id, req.body);
  res.status(200).json(user);
};

export const softDelete = async (
  req: Request<{ id: string }, {}, Prisma.UserUpdateInput>,
  res: Response<IUser>
) => {
  const user = await User.softDelete(+req.params.id);
  res.status(200).json(user);
};
