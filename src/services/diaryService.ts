import { DiaryEntry, DiaryEntryWithoutComments } from '../types';
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

export const addEntry = () => null;
