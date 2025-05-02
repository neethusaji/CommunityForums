import express from 'express';
import { addComment, deleteComment } from '../controllers/commentController';
import { authenticateToken } from '../middleware/authMiddleware';
const router = express.Router();

router.post('/', addComment);
router.delete('/:id', deleteComment);

export default router;