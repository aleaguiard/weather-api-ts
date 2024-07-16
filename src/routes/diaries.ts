import express from 'express';
import * as diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(diaryService.getEntries());
});

router.get('/no-comments', (_req, res) => {
	res.send(diaryService.getEntriesWithoutComments());
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const diary = diaryService.getById(Number(id));
	if (!diary) {
		res.status(404).send('Diary not found');
		return;
	}
	res.send(diary);
});

router.post('/', (_req, res) => {
	res.send('Posting Diaries');
});

export default router;
