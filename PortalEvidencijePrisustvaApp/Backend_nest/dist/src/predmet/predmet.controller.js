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
exports.PredmetController = void 0;
const common_1 = require("@nestjs/common");
const predmet_service_1 = require("./predmet.service");
const predmet_dto_1 = require("./models/predmet.dto");
const jwt_guard_1 = require("../logovanje/auth/utils/jwt.guard");
let PredmetController = class PredmetController {
    constructor(predmetService) {
        this.predmetService = predmetService;
    }
    getPredmete() {
        return this.predmetService.getAll();
    }
    getPredmet(id) {
        return this.predmetService.getById(id);
    }
    addPredmet(dto) {
        return this.predmetService.create(dto);
    }
    deletePredmet(id) {
        console.log('ovde sam u delete');
        return this.predmetService.delete(id);
    }
    updateSong(id, dto) {
        return this.predmetService.update(id, dto);
    }
};
exports.PredmetController = PredmetController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PredmetController.prototype, "getPredmete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PredmetController.prototype, "getPredmet", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [predmet_dto_1.PredmetDTO]),
    __metadata("design:returntype", void 0)
], PredmetController.prototype, "addPredmet", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PredmetController.prototype, "deletePredmet", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, predmet_dto_1.PredmetDTO]),
    __metadata("design:returntype", void 0)
], PredmetController.prototype, "updateSong", null);
exports.PredmetController = PredmetController = __decorate([
    (0, common_1.Controller)('predmet'),
    __metadata("design:paramtypes", [predmet_service_1.PredmetService])
], PredmetController);
//# sourceMappingURL=predmet.controller.js.map