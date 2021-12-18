import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import Course from "./Course";
import Exam from "./Exam";
import Teacher from "./Teacher";

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @ManyToOne(() => Course, course => course.id)
  course: Course;
  
  @Column()
  title: string;

  @Column()
  semester: number;

  @OneToMany(() => Exam, exam => exam.subject)
  exams: Exam[];

  @ManyToMany(() => Teacher, teacher => teacher.id)
  @JoinTable({
    name: 'teacher_subject',
    joinColumn: {
      name: 'subjectId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'teacherId',
      referencedColumnName: 'id'
    }
  })
  teachers: Teacher[]
}