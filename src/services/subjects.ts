import { getRepository } from "typeorm";
import Subject from '@/entities/Subject'

export async function getSubjects() {
  const subjects = await getRepository(Subject).find({relations:["teachers", "exams"]});
  return subjects;
}


export async function getSubjectById(subjectId: number){
  const subject = await getRepository(Subject).find({ id: subjectId });
  return subject;
}