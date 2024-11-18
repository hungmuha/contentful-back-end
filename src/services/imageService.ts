import sharp from 'sharp';
import axios from 'axios';

export const processImage = async (url: string, width: number, height: number): Promise<Buffer> => {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return await sharp(response.data).resize(width, height).toBuffer();
};
