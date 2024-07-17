import express from 'express';
import * as diaryController from '../controllers/diaryController';

const router = express.Router();

router.get('/', diaryController.getDiaries);
router.get('/no-comments', diaryController.getDiariesWithoutComments);
router.get('/:id', diaryController.getDiaryById);
router.post('/', diaryController.createDiaryEntry);
router.put('/:id', diaryController.updateDiaryEntry);
router.delete('/:id', diaryController.deleteDiaryEntry);

export default router;
