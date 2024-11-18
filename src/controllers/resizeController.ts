import { Request, Response } from 'express';
import { processImage } from '../services/imageService';

export const resizeImageHandler = async (req: Request, res: Response) => {
  const { url, width, height } = req.query;

  try {
    const imageBuffer = await processImage(url as string, +width!, +height!);
    res.type('image/png').send(imageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process image.' });
  }
};
