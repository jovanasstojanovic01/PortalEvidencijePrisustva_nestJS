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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProfesorController = void 0;
const common_1 = require("@nestjs/common");
const auth_profesor_service_1 = require("./auth-profesor.service");
const LocalProfesorGuard_1 = require("./utils/LocalProfesorGuard");
const jwt_guard_1 = require("../auth/utils/jwt.guard");
let AuthProfesorController = class AuthProfesorController {
    constructor(authProfesorService) {
        this.authProfesorService = authProfesorService;
    }
    async login(req) {
        console.log(req);
        return this.authProfesorService.loginProfesor(req.user);
    }
    logout() {
        this.authProfesorService.logoutProfesor();
    }
    async getAuthStatus(req) {
        return req.user;
    }
};
exports.AuthProfesorController = AuthProfesorController;
__decorate([
    (0, common_1.UseGuards)(LocalProfesorGuard_1.LocalProfesorAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthProfesorController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthProfesorController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('status'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthProfesorController.prototype, "getAuthStatus", null);
exports.AuthProfesorController = AuthProfesorController = __decorate([
    (0, common_1.Controller)('auth-profesor'),
    __metadata("design:paramtypes", [auth_profesor_service_1.AuthProfesorService])
], AuthProfesorController);
//# sourceMappingURL=auth-profesor.controller.js.map