import { getRepository } from "typeorm";
import Teacher from "@/entities/Teacher";

export async function getTeachers() {
  const teachers = await getRepository(Teacher).find({relations:["exams"]});
  return teachers;
}


export async function getTeachersExams(){
  const subjects = await getRepository(Teacher).createQueryBuilder("teachers").innerJoinAndSelect("teachers.exams", "exams").innerJoinAndSelect("exams.subject", "subject").getMany() 
  return subjects;
}