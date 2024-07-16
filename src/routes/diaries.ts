import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send('Fetching Diaries');
});

router.post('/', (_req, res) => {
	res.send('Posting Diaries');
});

export default router;
