import { startServer } from './server';

startServer().catch((error: any) => {
	console.error('Failed to start server:', error);
});
