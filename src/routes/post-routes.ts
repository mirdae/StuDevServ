import { Router } from 'express';
import {
  createPost,
  getAllPosts,
  getPostDetail,
  participateApply,
} from '../service/post-service';
import { decodeJWT } from '../middleware/decode-jwt';

const router = Router();

router.get('/:id/participate', decodeJWT, participateApply);
router.get('/:id', getPostDetail);
router.post('/', decodeJWT, createPost);
router.get('/', getAllPosts);

export default router;
