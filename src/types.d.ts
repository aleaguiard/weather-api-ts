export type Weather = 'rainy' | 'sunny' | 'windy' | 'cloudy';
export type Visibility = 'poor' | 'ok' | 'good' | 'excellent';

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}
