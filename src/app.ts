import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import router from './routes';

const app = express();

// Routes
app.use('/', router);

// Error handling middleware
app.use(errorHandler);

export default app;
