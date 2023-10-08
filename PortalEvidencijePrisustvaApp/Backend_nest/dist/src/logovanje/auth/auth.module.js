"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../../student/models/student.entity");
const passport_1 = require("@nestjs/passport");
const student_service_1 = require("../../student/student.service");
const LocalStrategy_1 = require("./utils/LocalStrategy");
const jwt_1 = require("@nestjs/jwt");
const envinronment_1 = require("../../environments/envinronment");
const jwt_strategy_1 = require("./utils/jwt.strategy");
const profesor_module_1 = require("../../profesor/profesor.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: envinronment_1.environment.jwt_secret,
                signOptions: { expiresIn: '3600s' },
            }),
            profesor_module_1.ProfesorModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, student_service_1.StudentService, LocalStrategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map