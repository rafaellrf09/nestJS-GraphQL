import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ) { }

    async createStudent(studentInput: CreateStudentInput): Promise<Student> {
        const {firstName, lastName} = studentInput;
        const newStudent = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        })

        return this.studentRepository.save(newStudent);
    }

    async getStudents():Promise<Student[]> {
        return this.studentRepository.find();
    }

    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOne({ id });
    }

    async getManyStudents(studentIds: string[]): Promise<Student[]> {
        return this.studentRepository.find({
            where : {
                id: {
                    $in: studentIds
                }
            }
        });
    }
    


}
