import { Request, Response } from 'express';
import * as teachersService from '@/services/teachers'


export async function getTeachers(req: Request, res: Response) {
    const teachers = await teachersService.getTeachers()
    return res.status(200).send(teachers)
}

export async function getTeacherById(req: Request, res: Response) {
  const id = req.params.id
  const teacher = await teachersService.getTeacherById(Number(id))
  return res.status(200).send(teacher);
}