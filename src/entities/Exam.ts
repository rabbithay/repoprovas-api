import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity('exams')
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  teacherId: number;

  @ManyToOne(() => Teacher, teacher => teacher.id)
  teacher: Teacher;

  @Column()
  subjectId: number;

  @ManyToOne(()=> Subject, subject => subject.id)
  subject: Subject;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  category: string;
}