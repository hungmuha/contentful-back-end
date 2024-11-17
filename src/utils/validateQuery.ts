import { Request, Response, NextFunction } from 'express';

export const validateQuery = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { url, width, height } = req.query;

  if (!url) {
    res.status(400).json({ error: "Missing 'url' query parameter" });
    return;
  }

  if (width && isNaN(Number(width))) {
    res.status(400).json({ error: "'width' must be a number" });
    return;
  }

  if (height && isNaN(Number(height))) {
    res.status(400).json({ error: "'height' must be a number" });
    return;
  }

  next(); // Ensure the middleware calls next() when validation passes
};
