import { promises as fs } from 'fs';

export const readJson = async (path: string): Promise<any> => {
	const data = await fs.readFile(path, 'utf8');
	return JSON.parse(data);
};
