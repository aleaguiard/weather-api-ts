import { DiaryEntry, DiaryEntryWithoutComments, NewDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

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

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
	const id = diaries.length + 1;
	const newDiary = {
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
	const index = diaries.findIndex((diary) => diary.id === id);
	if (index === -1) {
		return undefined;
	}
	const updatedDiary = { id, ...updatedDiaryEntry };
	diaries[index] = updatedDiary;
	return updatedDiary;
};

export const deleteDiary = (id: number): void => {
	const index = diaries.findIndex((diary) => diary.id === id);
	if (index !== -1) {
		diaries.splice(index, 1);
	}
};
