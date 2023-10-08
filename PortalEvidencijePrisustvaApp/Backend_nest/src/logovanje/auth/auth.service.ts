/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private jwtService: JwtService,
  ) {}

  async validateStudent(email: string, password: string) {
    console.log('inside validate');
    const studentDB = await this.studentService.findByEmail(email);
    if (studentDB && studentDB.password === password) {
      console.log(studentDB);
      return studentDB;
    }
    return null;
  }

  async loginStudent(student: any) {
    const payload = { name: student.email, sub: student.id };
    console.log('ovde');
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  logoutStudent() {}
}
