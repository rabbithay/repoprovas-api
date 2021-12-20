import { getRepository } from "typeorm";

import Teacher from '../../src/entities/Teacher';
import Subject from '../../src/entities/Subject';
import Exam from '../../src/entities/Exam';
import Course from '../../src/entities/Course';


export async function clearDatabase () {
  await getRepository(Teacher).delete({});
  await getRepository(Subject).delete({});
  await getRepository(Exam).delete({});
  await getRepository(Course).delete({});
}