import { getRepository } from "typeorm";
import Teacher from "@/entities/Teacher";

export async function getTeachers() {
  const teachers = await getRepository(Teacher).find({relations:["exams"]});
  return teachers;
}


export async function getTeacherById(teacherId: number){
  const teacher = await getRepository(Teacher).find({ id: teacherId });
  return teacher;
}