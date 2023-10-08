/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { environment } from 'src/environments/envinronment';
import { ProfesorService } from 'src/profesor/profesor.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private studentService: StudentService,
    private profesorService: ProfesorService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExiration: false,
      secretOrKey: environment.jwt_secret,
    });
  }

  async validate(payload: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const profesor = this.profesorService.getById(payload.sub);
    const student = this.studentService.getById(payload.sub);
    console.log('u validate u jqwt');
    if (!profesor && !student) {
      throw new UnauthorizedException();
    }
    const user = student ? student : profesor;
    return { ...user };
  }
}
