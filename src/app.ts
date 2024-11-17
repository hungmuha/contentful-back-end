import express from 'express';
import imageRoutes from './routes/image';
import { errorHandler } from './utils/errorHandler';

const app = express();

// Routes
app.use('/resize', imageRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
