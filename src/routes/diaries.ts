import express from 'express';
import * as diaryService from '../services/diaryService';
import { validateDiaryEntry } from '../schema/diary';
import { DiaryEntry, NewDiaryEntry } from '../types';

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

router.post('/', (req, res) => {
	const validationResult = validateDiaryEntry.safeParse(req.body);

	if (!validationResult.success) {
		res.status(400).send('Invalid diary entry: ' + validationResult.error?.message);
		return;
	}

	const newEntry: NewDiaryEntry = {
		date: validationResult.data.date,
		weather: validationResult.data.weather,
		visibility: validationResult.data.visibility,
		comment: validationResult.data.comment ?? '',
	};

	const newDiary = diaryService.addDiary(newEntry);

	if (!newDiary) {
		res.status(500).send('Failed to add diary');
		return;
	}

	res.json(newDiary);
});

router.put('/:id', (req, res) => {
	const validationResult = validateDiaryEntry.safeParse(req.body);

	if (!validationResult.success) {
		res.status(400).send('Invalid diary entry: ' + validationResult.error?.message);
		return;
	}

	const idUpdate = Number(req.params.id);

	const updatedEntry: DiaryEntry = {
		id: idUpdate,
		date: validationResult.data.date,
		weather: validationResult.data.weather,
		visibility: validationResult.data.visibility,
		comment: validationResult.data.comment ?? '',
	};

	const updatedDiary = diaryService.updateDiary(idUpdate, updatedEntry);

	if (!updatedDiary) {
		res.status(404).send('Diary not found');
		return;
	}

	res.json(updatedDiary);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	diaryService.deleteDiary(Number(id));
	res.sendStatus(200);
});

export default router;
