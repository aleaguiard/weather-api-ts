import z from 'zod';

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const weatherSchema = z.enum(['rainy', 'sunny', 'windy', 'cloudy']);
const visibilitySchema = z.enum(['poor', 'ok', 'good', 'excellent']);

export const validateDiaryEntry = z.object({
	date: dateSchema,
	weather: weatherSchema,
	visibility: visibilitySchema,
	comment: z.string().optional(),
});
