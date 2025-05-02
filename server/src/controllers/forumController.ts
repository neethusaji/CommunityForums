import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getForums = async (req: Request, res: Response) => {
  const forums = await prisma.forum.findMany();
  res.json(forums);
};

export const getForumById = async (req: Request, res: Response) => {
  const forum = await prisma.forum.findUnique({
    where: { id: req.params.id },
    include: { comments: true },
  });
  res.json(forum);
};

export const createForum = async (req: Request, res: Response) => {
  const { title, description, tags, userId } = req.body;
  const forum = await prisma.forum.create({ data: { title, description, tags, userId } });
  res.json(forum);
};

export const updateForum = async (req: Request, res: Response) => {
  const forum = await prisma.forum.update({ where: { id: req.params.id }, data: req.body });
  res.json(forum);
};

export const deleteForum = async (req: Request, res: Response) => {
  await prisma.forum.delete({ where: { id: req.params.id } });
  res.sendStatus(204);
};
