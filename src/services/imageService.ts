import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import axios from 'axios';

export const resizeImageHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { url, width, height } = req.query;
    try {
        // Fetch the image
        const response = await axios.get(url as string, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');

        // Resize the image
        const resizedImage = await sharp(imageBuffer)
            .resize(
                width ? parseInt(width as string, 10) : undefined,
                height ? parseInt(height as string, 10) : undefined
            )
            .toBuffer();

        // Send the resized image
        res.set('Content-Type', 'image/jpeg');
        res.send(resizedImage);
    } catch (error: any) {
        console.error('Image resizing error:', error.message);
        next(new Error('Failed to resize image. Please check the URL and parameters.'));
    }
};
