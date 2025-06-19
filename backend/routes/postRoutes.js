import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', protect, createPost);  // only logged-in users can post

export default router;
