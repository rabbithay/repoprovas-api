import { Request, Response } from 'express';
import * as examsService from '../services/exams';
import { validateObject } from '../services/utils';
import { newExamSchema } from '../schemas/newExamSchema';


export interface ExamCreate {
    title: string
    category: string
    subjectId: number
    teacherId: number
    link: string
}

export async function postExam(req: Request, res: Response) {
    const examInfo: ExamCreate = req.body;

    const isValidExam = validateObject({
        object: examInfo,
        schema: newExamSchema
    })
    if (!isValidExam) return res.sendStatus(400);

    await examsService.createExam(examInfo);
    res.sendStatus(201)
}

export async function getExams(req: Request, res: Response) {
    const exams = await examsService.getExams()    
    return res.status(200).send(exams)
}