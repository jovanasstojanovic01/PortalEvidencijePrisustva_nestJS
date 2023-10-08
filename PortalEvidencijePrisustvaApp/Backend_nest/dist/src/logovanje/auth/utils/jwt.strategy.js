"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const envinronment_1 = require("../../../environments/envinronment");
const profesor_service_1 = require("../../../profesor/profesor.service");
const student_service_1 = require("../../../student/student.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(studentService, profesorService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: envinronment_1.environment.jwt_secret,
        });
        this.studentService = studentService;
        this.profesorService = profesorService;
    }
    async validate(payload) {
        const profesor = this.profesorService.getById(payload.sub);
        const student = this.studentService.getById(payload.sub);
        console.log('u validate u jqwt');
        if (!profesor && !student) {
            throw new common_1.UnauthorizedException();
        }
        const user = student ? student : profesor;
        return { ...user };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        profesor_service_1.ProfesorService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map