export type Weather = 'rainy' | 'sunny' | 'windy' | 'cloudy';
export type Visibility = 'poor' | 'ok' | 'good' | 'excellent';

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}

// export type DiaryEntryWithComments = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;
export type DiaryEntryWithoutComments = Omit<DiaryEntry, 'comment'>;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
