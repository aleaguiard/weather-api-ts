import { DiaryEntry, DiaryEntryWithoutComments, NewDiaryEntry } from '../types';
import { readJson } from '../utils/jsonUtils';

let diaries: Array<DiaryEntry> = [];

export const loadDiaries = async (): Promise<void> => {
	try {
		diaries = (await readJson('./src/services/diaries.json')) as Array<DiaryEntry>;
	} catch (error) {
		console.error('Error loading diaries:', error);
	}
};

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutComments = (): DiaryEntryWithoutComments[] => {
	return diaries.map((diary) => ({
		id: diary.id,
		date: diary.date,
		weather: diary.weather,
		visibility: diary.visibility,
	}));
};

export const getById = (id: number): DiaryEntry | undefined => {
	return diaries.find((diary) => diary.id === id);
};

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry | undefined => {
	const id = diaries.length + 1;
	if (diaries.some((diary) => diary.id === id)) {
		throw new Error(`Diary entry with ID ${id} already exists.`);
	}
	const newDiary: DiaryEntry = {
		id,
		...newDiaryEntry,
	};
	diaries.push(newDiary);
	return newDiary;
};

export const updateDiary = (
	id: number,
	updatedDiaryEntry: NewDiaryEntry
): DiaryEntry | undefined => {
	const existingDiary = getById(id);
	if (!existingDiary) {
		return undefined;
	}
	const updatedDiary: DiaryEntry = { id, ...updatedDiaryEntry };
	const index = diaries.findIndex((diary) => diary.id === id);
	diaries[index] = updatedDiary;
	return updatedDiary;
};

export const deleteDiary = (id: number): void => {
	const index = diaries.findIndex((diary) => diary.id === id);
	if (index !== -1) {
		diaries.splice(index, 1);
	}
};
