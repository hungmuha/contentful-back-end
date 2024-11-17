import express from 'express';
import imageRoutes from './routes/image';
import { errorHandler } from './utils/errorHandler';

const app = express();

// Routes
app.use('/resize', imageRoutes);
app.get('/', (req, res) => {
  res.send('Image Resizer Service');
})

// Error handling middleware
app.use(errorHandler);

export default app;
