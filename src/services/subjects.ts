import { getRepository } from "typeorm";
import Subject from '@/entities/Subject'

export async function getSubjectsAndTeachers() {
  const subjects = await getRepository(Subject).find({relations:["teachers"]});
  return subjects;
}

export async function getSubjectsAndExams(){
  const subjects = await getRepository(Subject).createQueryBuilder("subjects").innerJoinAndSelect("subjects.exams", "exams").innerJoinAndSelect("exams.teacher", "teacher").getMany() 
  return subjects;
}