import request from 'supertest';
import app, { startServer } from '../src/server';
import * as diaryService from '../src/services/diaryService';

beforeAll(async () => {
	await startServer();
	await diaryService.loadDiaries();
});

describe('POST /api/diaries', () => {
	it('should return 400 if request body is invalid', async () => {
		const invalidDiaryEntry = {
			date: '2024-07-17',
			weather: 'sunny',
			visibility: '0', // Invalid visibility value
			// Field 'comment' is optional
		};

		const response = await request(app)
			.post('/api/diaries')
			.send(invalidDiaryEntry)
			.expect(400);

		expect(response.text).toContain('Invalid diary entry');
	});

	it('should return diary entry by id', async () => {
		const response = await request(app).get('/api/diaries/1').expect(200);

		expect(response.body).toHaveProperty('id');
		expect(response.body.date).toEqual('2017-01-01');
		expect(response.body.weather).toEqual('rainy');
		expect(response.body.visibility).toEqual('poor');
		expect(response.body.comment).toEqual("Pretty scary flight, I'm glad I'm alive");
	});

	it('should create a new diary entry', async () => {
		const newDiaryEntry = {
			date: '2024-07-17',
			weather: 'sunny',
			visibility: 'good',
			comment: 'Enjoyed a beautiful sunny day!',
		};

		const response = await request(app).post('/api/diaries').send(newDiaryEntry).expect(200);

		expect(response.body).toHaveProperty('id');
		expect(response.body.date).toEqual(newDiaryEntry.date);
		expect(response.body.weather).toEqual(newDiaryEntry.weather);
		expect(response.body.visibility).toEqual(newDiaryEntry.visibility);
		expect(response.body.comment).toEqual(newDiaryEntry.comment);
	});

	it('should return all diary entries', async () => {
		const response = await request(app).get('/api/diaries').expect(200);
		console.log(response.body);
		expect(response.body).toHaveLength(diaryService.getEntries().length);
	});
});
