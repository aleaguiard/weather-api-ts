import express from 'express';
import diaryRouter from './routes/diaries';
import { loadDiaries } from './services/diaryService';
import loggingMiddleware from './middleware/loggingMiddleware';

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
	res.send('API is running properly');
});

app.use('/api/diaries', diaryRouter);

export const startServer = async () => {
	await loadDiaries();
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
};

export default app;
