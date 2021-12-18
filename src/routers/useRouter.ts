import { Router } from 'express';
import * as subjectsController from '@/controllers/subjects'

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).send("OK!")
});

router.post('/exams', () => {});

router.get('/exams', () => {});

router.get('/subjects', subjectsController.getSubjects);

router.get('/subjects/:id', () => {});

router.get('/teachers', () => {});

router.get('/teachers/:id', () => {});

export default router;
