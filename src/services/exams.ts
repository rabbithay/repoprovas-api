import { ExamCreate } from "@/controllers/exams";
import Exam from "@/entities/Exam";
import { getRepository } from "typeorm";;

export async function createExam(exam: ExamCreate) {
    await getRepository(Exam).insert(exam);
}

export async function getExams() {
    const exams = await getRepository(Exam).find({relations:["teacher", "subject"]});
    return exams;
}