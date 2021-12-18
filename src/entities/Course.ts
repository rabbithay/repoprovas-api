import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./Subject";

@Entity('courses')
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Subject, subject => subject.course)
  subjects: Subject[];
}