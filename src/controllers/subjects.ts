import { Request, Response } from 'express';
import * as subjectsService from '@/services/subjects'

export async function getSubjects(req: Request, res: Response) {
  const subjects = await subjectsService.getSubjects();
  res.status(200).send(subjects);
}

export async function getSubjectById(req: Request, res: Response) {
  const id = req.params.id
  const subject = await subjectsService.getSubjectById(Number(id))
  console.log({subject})
  return res.status(200).send(subject);
}