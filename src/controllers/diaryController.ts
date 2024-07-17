import { Request, Response } from 'express';
import * as diaryService from '../services/diaryService';
import { validateDiaryEntry } from '../schema/diary';
import { DiaryEntry, NewDiaryEntry } from '../types';

export const getDiaries = (_req: Request, res: Response): void => {
	const entries = diaryService.getEntries();
	res.send(entries);
};

export const getDiariesWithoutComments = (_req: Request, res: Response): void => {
	const entries = diaryService.getEntriesWithoutComments();
	res.send(entries);
};

export const getDiaryById = (req: Request, res: Response): void => {
	const { id } = req.params;
	const diary = diaryService.getById(Number(id));
	if (!diary) {
		res.status(404).send('Diary not found');
		return;
	}
	res.send(diary);
};

export const createDiaryEntry = (req: Request, res: Response): void => {
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
};

export const updateDiaryEntry = (req: Request, res: Response): void => {
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
};

export const deleteDiaryEntry = (req: Request, res: Response): void => {
	const { id } = req.params;
	diaryService.deleteDiary(Number(id));
	res.sendStatus(200);
};
