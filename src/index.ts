import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
	res.send('API is running properly');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
