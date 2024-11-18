import app from "../app";

import express from 'express';
import { validateQuery } from '../middlewares/validateQuery';
import { resizeImageHandler } from "../controllers/resizeController";

const router = express.Router();

router.get('/resize', validateQuery, resizeImageHandler);

export default router;
