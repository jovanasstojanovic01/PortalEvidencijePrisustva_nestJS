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
exports.AdministratorService = void 0;
const common_1 = require("@nestjs/common");
const administrator_entity_1 = require("./model/administrator.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AdministratorService = class AdministratorService {
    constructor(profesorRepository) {
        this.profesorRepository = profesorRepository;
    }
    async checkIfAdminExists(idProfesora) {
        const options = {
            where: { id: idProfesora },
        };
        return !!this.profesorRepository.findOne(options);
    }
    async create(admin) {
        const newAdmin = this.profesorRepository.create(admin);
        return await this.profesorRepository.save(newAdmin);
    }
};
exports.AdministratorService = AdministratorService;
exports.AdministratorService = AdministratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrator_entity_1.Administrator)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministratorService);
//# sourceMappingURL=administrator.service.js.map