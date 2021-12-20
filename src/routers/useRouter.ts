import { Router } from 'express';
import * as subjectsController from '@/controllers/subjects'
import * as examsController from '@/controllers/exams'
import * as teachersController from '@/controllers/teachers'

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).send("OK!")
});

router.post('/exams', examsController.postExam);

router.get('/exams', examsController.getExams);

router.get('/subjects', subjectsController.getSubjects);

router.get('/subjects/:id', subjectsController.getSubjectById);

router.get('/teachers', teachersController.getTeachers);

router.get('/teachers/:id',teachersController.getTeacherById);

export default router;
