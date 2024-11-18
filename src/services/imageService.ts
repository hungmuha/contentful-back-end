import axios from 'axios';
import sharp from 'sharp';

export const processImage = async (url: string, width: number, height: number): Promise<Buffer> => {
  const response = await axios({ url, method: 'GET', responseType: 'stream' });
  
  // Pipe the stream directly to sharp, which will process the image as it is being streamed.
  return new Promise((resolve, reject) => {
    const transformer = sharp().resize(width, height);
    const chunks: Buffer[] = [];
    
    response.data
      .pipe(transformer)
      .on('data', (chunk: Buffer) => chunks.push(chunk))
      .on('end', () => resolve(Buffer.concat(chunks))) 
      .on('error', reject);  // Reject if there's an error during streaming
  });
};
