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
exports.PrisustvoController = void 0;
const common_1 = require("@nestjs/common");
const prisustvo_service_1 = require("./prisustvo.service");
const prisustvo_dto_1 = require("./models/prisustvo.dto");
const jwt_guard_1 = require("../logovanje/auth/utils/jwt.guard");
let PrisustvoController = class PrisustvoController {
    constructor(prisustvoService) {
        this.prisustvoService = prisustvoService;
    }
    getPrisustva() {
        return this.prisustvoService.getAll();
    }
    getPrisistvo(id) {
        return this.prisustvoService.getById(id);
    }
    async pronadjiPrisustvo(studentId, predmetId) {
        return this.prisustvoService.pronadjiPrisustvo(studentId, predmetId);
    }
    async findAllPredmetiForStudent(studentId) {
        return this.prisustvoService.findAllPredmetiForStudent(studentId);
    }
    addPrisustvo(dto) {
        return this.prisustvoService.create(dto);
    }
    deletePrisustvo(id) {
        console.log('brise se prisustvo');
        return this.prisustvoService.delete(id);
    }
    async increaseCasCount(id) {
        return this.prisustvoService.update(id);
    }
    async getPrisustvaWithStudentInfoByPredmetId(predmetId) {
        return this.prisustvoService.getPrisustvaWithStudentInfoByPredmetId(predmetId);
    }
    async getPrisustvaForStudent(idStudenta) {
        return this.prisustvoService.getPrisustvaForStudent(idStudenta);
    }
    async deletePrisustvaForStudent(idStudenta) {
        return this.prisustvoService.deletePrisustvaForStudent(idStudenta);
    }
    async deletePrisustvoPoPredmetu(idPredmeta) {
        await this.prisustvoService.deletePrisustvoPoPredmetu(idPredmeta);
    }
    async getPrisustvaByPredmetId(predmetId) {
        return this.prisustvoService.getPrisustvaByPredmetId(predmetId);
    }
};
exports.PrisustvoController = PrisustvoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrisustvoController.prototype, "getPrisustva", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrisustvoController.prototype, "getPrisistvo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('student/:studentId/predmet/:predmetId'),
    __param(0, (0, common_1.Param)('studentId')),
    __param(1, (0, common_1.Param)('predmetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "pronadjiPrisustvo", null);
__decorate([
    (0, common_1.Get)(':studentId/predmeti'),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "findAllPredmetiForStudent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prisustvo_dto_1.PrisustvoDTO]),
    __metadata("design:returntype", void 0)
], PrisustvoController.prototype, "addPrisustvo", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrisustvoController.prototype, "deletePrisustvo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)('increase-cas-count/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "increaseCasCount", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('predmet/:predmetId'),
    __param(0, (0, common_1.Param)('predmetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "getPrisustvaWithStudentInfoByPredmetId", null);
__decorate([
    (0, common_1.Get)('student/:idStudenta'),
    __param(0, (0, common_1.Param)('idStudenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "getPrisustvaForStudent", null);
__decorate([
    (0, common_1.Delete)('studentDelete/:idStudenta'),
    __param(0, (0, common_1.Param)('idStudenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "deletePrisustvaForStudent", null);
__decorate([
    (0, common_1.Delete)('poPredmetu/:idPredmeta'),
    __param(0, (0, common_1.Param)('idPredmeta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "deletePrisustvoPoPredmetu", null);
__decorate([
    (0, common_1.Get)('poPredmetu/:predmetId'),
    __param(0, (0, common_1.Param)('predmetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoController.prototype, "getPrisustvaByPredmetId", null);
exports.PrisustvoController = PrisustvoController = __decorate([
    (0, common_1.Controller)('prisustvo'),
    __metadata("design:paramtypes", [prisustvo_service_1.PrisustvoService])
], PrisustvoController);
//# sourceMappingURL=prisustvo.controller.js.map