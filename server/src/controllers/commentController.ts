import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const addComment = async (req: Request, res: Response) => {
  const { content, forumId } = req.body;
  const userId = req.body.userId;
  const comment = await prisma.comment.create({ data: { content, forumId, userId } });
  res.json(comment);
};

export const deleteComment = async (req: Request, res: Response) => {
  await prisma.comment.delete({ where: { id: req.params.id } });
  res.sendStatus(204);
};
