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

router.get('/subjects/teachers', subjectsController.getSubjectsAndTeachers);

router.get('/subjects/exams', subjectsController.getSubjectsAndExams);

router.get('/teachers', teachersController.getTeachers);

router.get('/teachers/exams',teachersController.getTeachersExams);

export default router;
