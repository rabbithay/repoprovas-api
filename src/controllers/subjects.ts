import { Request, Response } from 'express';
import * as subjectsService from '../services/subjects'

export async function getSubjectsAndTeachers(req: Request, res: Response) {
  const subjects = await subjectsService.getSubjectsAndTeachers();
  res.status(200).send(subjects);
}

export async function getSubjectsAndExams(req: Request, res: Response) {
  const subject = await subjectsService.getSubjectsAndExams()
  return res.status(200).send(subject);
}