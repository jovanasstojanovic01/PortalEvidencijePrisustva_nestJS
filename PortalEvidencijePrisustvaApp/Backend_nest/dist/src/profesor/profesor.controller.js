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
exports.ProfesorController = void 0;
const common_1 = require("@nestjs/common");
const profesor_service_1 = require("./profesor.service");
const profesor_dto_1 = require("./models/profesor.dto");
const jwt_guard_1 = require("../logovanje/auth/utils/jwt.guard");
let ProfesorController = class ProfesorController {
    constructor(profesorService) {
        this.profesorService = profesorService;
    }
    async getPredmetiByProfesorId(profesorId) {
        return this.profesorService.getPredmetiByProfesorId(profesorId);
    }
    getProfesore() {
        return this.profesorService.getAll();
    }
    getProfesor(id) {
        return this.profesorService.getById(id);
    }
    addProfesor(dto) {
        return this.profesorService.create(dto);
    }
    deleteProfesor(id) {
        return this.profesorService.delete(id);
    }
    updateSong(id, dto) {
        return this.profesorService.update(id, dto);
    }
    getProfesorByEmail(email) {
        return this.profesorService.findByEmail(email);
    }
};
exports.ProfesorController = ProfesorController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':profesorId/predmeti'),
    __param(0, (0, common_1.Param)('profesorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfesorController.prototype, "getPredmetiByProfesorId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "getProfesore", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "getProfesor", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profesor_dto_1.ProfesorDTO]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "addProfesor", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "deleteProfesor", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profesor_dto_1.ProfesorDTO]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "updateSong", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "getProfesorByEmail", null);
exports.ProfesorController = ProfesorController = __decorate([
    (0, common_1.Controller)('profesor'),
    __metadata("design:paramtypes", [profesor_service_1.ProfesorService])
], ProfesorController);
//# sourceMappingURL=profesor.controller.js.map