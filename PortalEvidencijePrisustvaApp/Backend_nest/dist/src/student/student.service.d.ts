import { Repository } from 'typeorm';
import { Student } from './models/student.entity';
import { StudentDTO } from './models/student.dto';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    list: Student[];
    getAll(): Promise<Student[]>;
    getById(id: number): Promise<Student>;
    create(studentDTO: StudentDTO): Promise<Student>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: StudentDTO): Promise<import("typeorm").UpdateResult>;
    findByEmail(email: string): Promise<Student | null>;
    findByIndeks(indeks: number): Promise<Student | null>;
}
