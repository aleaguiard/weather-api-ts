import express from 'express';
import * as diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(diaryService.getEntries());
});

router.get('/no-comments', (_req, res) => {
	res.send(diaryService.getEntriesWithoutComments());
});

router.post('/', (_req, res) => {
	res.send('Posting Diaries');
});

export default router;
