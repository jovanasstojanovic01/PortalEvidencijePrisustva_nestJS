import { StudentService } from './student.service';
import { StudentDTO } from './models/student.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getStudente(): Promise<import("./models/student.entity").Student[]>;
    getStudentByEmail(email: string): Promise<import("./models/student.entity").Student>;
    getStudentByIndeks(indeks: number): Promise<import("./models/student.entity").Student>;
    getStudent(id: number): Promise<import("./models/student.entity").Student>;
    addStudent(dto: StudentDTO): Promise<import("./models/student.entity").Student>;
    deleteStudent(id: number): Promise<import("typeorm").DeleteResult>;
    updateSong(id: number, dto: StudentDTO): Promise<import("typeorm").UpdateResult>;
}
