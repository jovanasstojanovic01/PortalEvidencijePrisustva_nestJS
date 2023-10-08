import { Strategy } from 'passport-jwt';
import { ProfesorService } from 'src/profesor/profesor.service';
import { StudentService } from 'src/student/student.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private studentService;
    private profesorService;
    constructor(studentService: StudentService, profesorService: ProfesorService);
    validate(payload: any): Promise<import("../../../student/models/student.entity").Student | import("../../../profesor/models/profesor.entity").Profesor>;
}
export {};
