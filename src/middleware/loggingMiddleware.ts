import { Request, Response, NextFunction } from 'express';

const loggingMiddleware = (req: Request, _res: Response, next: NextFunction) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
};

export default loggingMiddleware;
