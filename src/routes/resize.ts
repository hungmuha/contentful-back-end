import express from 'express';
import { resizeImageHandler } from '../services/imageService';
import { validateQuery } from '../middlewares/validateQuery';

const router = express.Router();

router.get('/', validateQuery, resizeImageHandler);

export default router;
