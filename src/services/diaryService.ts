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

export const addDiary = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
	const id = diaries.length + 1;
	const NewDiary = {
		id,
		...NewDiaryEntry,
	};
	diaries.push(NewDiary);
	return diaries[id - 1];
};

// export const updateDiary = (id: number, NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
// 	const updatedDiary = {
// 		...getById(id),
// 		...NewDiaryEntry,
// 	};
// 	diaries[id - 1] = updatedDiary;
// 	return updatedDiary;
// };

export const deleteDiary = (id: number): void => {
	diaries.splice(id - 1, 1);
};
