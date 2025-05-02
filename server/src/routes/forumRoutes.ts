import express from 'express';
import { createForum, getForums, getForumById, updateForum, deleteForum } from '../controllers/forumController';
const router = express.Router();

router.get('/', getForums);
router.get('/:id', getForumById);
router.post('/', createForum);
router.put('/:id', updateForum);
router.delete('/:id', deleteForum);

export default router;