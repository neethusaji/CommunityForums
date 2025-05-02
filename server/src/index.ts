import express from 'express';
import cors from 'cors';
import forumRoutes from './routes/forumRoutes';
import commentRoutes from './routes/commentRoutes';
import authRoutes from './routes/authRoutes';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/forums', forumRoutes);
app.use('/api/comments', commentRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

