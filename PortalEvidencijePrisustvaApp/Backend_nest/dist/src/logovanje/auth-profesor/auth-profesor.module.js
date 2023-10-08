"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProfesorModule = void 0;
const common_1 = require("@nestjs/common");
const auth_profesor_service_1 = require("./auth-profesor.service");
const auth_profesor_controller_1 = require("./auth-profesor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const profesor_entity_1 = require("../../profesor/models/profesor.entity");
const passport_1 = require("@nestjs/passport");
const profesor_service_1 = require("../../profesor/profesor.service");
const jwt_1 = require("@nestjs/jwt");
const envinronment_1 = require("../../environments/envinronment");
const LocalProfesorStrategy_1 = require("./utils/LocalProfesorStrategy");
const jwt_strategy_1 = require("../auth/utils/jwt.strategy");
const student_module_1 = require("../../student/student.module");
let AuthProfesorModule = class AuthProfesorModule {
};
exports.AuthProfesorModule = AuthProfesorModule;
exports.AuthProfesorModule = AuthProfesorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([profesor_entity_1.Profesor]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.register({
                secret: envinronment_1.environment.jwt_secret,
                signOptions: { expiresIn: '60s' },
            }),
            student_module_1.StudentModule,
        ],
        controllers: [auth_profesor_controller_1.AuthProfesorController],
        providers: [
            auth_profesor_service_1.AuthProfesorService,
            profesor_service_1.ProfesorService,
            LocalProfesorStrategy_1.LocalProfesorStrategy,
            jwt_strategy_1.JwtStrategy,
        ],
        exports: [auth_profesor_service_1.AuthProfesorService],
    })
], AuthProfesorModule);
//# sourceMappingURL=auth-profesor.module.js.map