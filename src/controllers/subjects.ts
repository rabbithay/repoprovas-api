import { Request, Response } from 'express';
import * as subjectsService from '@/services/subjects'

export async function getSubjects(req: Request, res: Response) {
  const subjects = await subjectsService.getSubjects();
  res.status(200).send(subjects);
}

