import { StudentService } from 'src/student/student.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private studentService;
    private jwtService;
    constructor(studentService: StudentService, jwtService: JwtService);
    validateStudent(email: string, password: string): Promise<import("../../student/models/student.entity").Student>;
    loginStudent(student: any): Promise<{
        access_token: string;
    }>;
    logoutStudent(): void;
}
