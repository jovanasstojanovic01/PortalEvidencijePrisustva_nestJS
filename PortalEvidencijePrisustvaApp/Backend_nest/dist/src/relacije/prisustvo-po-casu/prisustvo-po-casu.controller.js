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
exports.PrisustvoPoCasuController = void 0;
const common_1 = require("@nestjs/common");
const prisustvo_po_casu_service_1 = require("./prisustvo-po-casu.service");
const PrisustvoPoCasu_dto_1 = require("./model/PrisustvoPoCasu.dto");
const jwt_guard_1 = require("../../logovanje/auth/utils/jwt.guard");
let PrisustvoPoCasuController = class PrisustvoPoCasuController {
    constructor(prisustvoPoCasuService) {
        this.prisustvoPoCasuService = prisustvoPoCasuService;
    }
    async proveriPrisustvoPoCasu(casId, prisustvoId) {
        const prisustvoPoCasu = await this.prisustvoPoCasuService.proveriPrisustvoPoCasu(casId, prisustvoId);
        if (!prisustvoPoCasu) {
            return false;
        }
        return true;
    }
    async createPrisustvoPoCasu(createDto) {
        return this.prisustvoPoCasuService.create(createDto);
    }
    async countPrisustvoPoCasuByPredmet(predmetId) {
        return this.prisustvoPoCasuService.countPrisustvoPoCasuByCasAndPredmet(predmetId);
    }
    async deletePrisustvoPoCasuForStudent(idStudenta) {
        await this.prisustvoPoCasuService.deletePrisustvaForStudent(idStudenta);
    }
    async deletePrisustvoPoCasuForPrisustvo(idPrisustva) {
        await this.prisustvoPoCasuService.deletePrisustvaForPisustvo(idPrisustva);
    }
};
exports.PrisustvoPoCasuController = PrisustvoPoCasuController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('cas/:casId/prisustvo/:prisustvoId'),
    __param(0, (0, common_1.Param)('casId')),
    __param(1, (0, common_1.Param)('prisustvoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PrisustvoPoCasuController.prototype, "proveriPrisustvoPoCasu", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PrisustvoPoCasu_dto_1.PrisustvoPoCasuDTO]),
    __metadata("design:returntype", Promise)
], PrisustvoPoCasuController.prototype, "createPrisustvoPoCasu", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('predmet/:predmetId/casovi/count'),
    __param(0, (0, common_1.Param)('predmetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoPoCasuController.prototype, "countPrisustvoPoCasuByPredmet", null);
__decorate([
    (0, common_1.Delete)('student/:idStudenta'),
    __param(0, (0, common_1.Param)('idStudenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoPoCasuController.prototype, "deletePrisustvoPoCasuForStudent", null);
__decorate([
    (0, common_1.Delete)('prisustvo/:idPrisustva'),
    __param(0, (0, common_1.Param)('idPrisustva')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrisustvoPoCasuController.prototype, "deletePrisustvoPoCasuForPrisustvo", null);
exports.PrisustvoPoCasuController = PrisustvoPoCasuController = __decorate([
    (0, common_1.Controller)('prisustvo-po-casu'),
    __metadata("design:paramtypes", [prisustvo_po_casu_service_1.PrisustvoPoCasuService])
], PrisustvoPoCasuController);
//# sourceMappingURL=prisustvo-po-casu.controller.js.map