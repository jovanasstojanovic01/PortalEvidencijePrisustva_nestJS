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
exports.AuthProfesorService = void 0;
const common_1 = require("@nestjs/common");
const profesor_service_1 = require("../../profesor/profesor.service");
const jwt_1 = require("@nestjs/jwt");
let AuthProfesorService = class AuthProfesorService {
    constructor(profesorService, jwtService) {
        this.profesorService = profesorService;
        this.jwtService = jwtService;
    }
    async validateProfesor(email, password) {
        console.log('inside validate');
        const profesorDB = await this.profesorService.findByEmail(email);
        if (profesorDB && profesorDB.password === password) {
            console.log(profesorDB);
            return profesorDB;
        }
        return null;
    }
    async loginProfesor(profesor) {
        const payload = { name: profesor.email, sub: profesor.id };
        console.log('ovde');
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    logoutProfesor() { }
};
exports.AuthProfesorService = AuthProfesorService;
exports.AuthProfesorService = AuthProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profesor_service_1.ProfesorService,
        jwt_1.JwtService])
], AuthProfesorService);
//# sourceMappingURL=auth-profesor.service.js.map