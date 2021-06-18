import { Router } from 'express';
const router = Router();

import { createPost, updatePost, deletePost, getOnePost, getPosts } from '../controllers/posts.controller';

// api/posts
router.get('/', getPosts);
router.get('/:id', getOnePost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);


export default router;