import { Request, Response } from 'express';
import * as teachersService from '../services/teachers'


export async function getTeachers(req: Request, res: Response) {
    const teachers = await teachersService.getTeachers()
    return res.status(200).send(teachers)
}

export async function getTeachersExams(req: Request, res: Response) {
  const teacher = await teachersService.getTeachersExams()
  return res.status(200).send(teacher);
}