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
exports.PredmetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const predmet_entity_1 = require("./models/predmet.entity");
let PredmetService = class PredmetService {
    constructor(predmetRepository) {
        this.predmetRepository = predmetRepository;
    }
    getAll() {
        return this.predmetRepository.find();
    }
    async getById(id) {
        const options = {
            where: { id: id },
        };
        return this.predmetRepository.findOne(options);
    }
    async create(predmetDTO) {
        const predmet = this.predmetRepository.create(predmetDTO);
        return await this.predmetRepository.save(predmet);
    }
    async delete(id) {
        console.log('ovde sam u delete');
        const existingPredmet = await this.predmetRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!existingPredmet) {
            throw new common_1.NotFoundException(`Predmet sa ID ${id} ne postoji.`);
        }
        return await this.predmetRepository.delete(id);
    }
    async update(id, dto) {
        return await this.predmetRepository.update(id, dto);
    }
};
exports.PredmetService = PredmetService;
exports.PredmetService = PredmetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(predmet_entity_1.Predmet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PredmetService);
//# sourceMappingURL=predmet.service.js.map