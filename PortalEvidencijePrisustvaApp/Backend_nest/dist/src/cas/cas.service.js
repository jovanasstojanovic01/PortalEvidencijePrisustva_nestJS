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
exports.CasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cas_entity_1 = require("./models/cas.entity");
let CasService = class CasService {
    constructor(casRepository) {
        this.casRepository = casRepository;
    }
    getAll() {
        return this.casRepository.find();
    }
    async getById(id) {
        const options = {
            where: { id: id },
        };
        return this.casRepository.findOne(options);
    }
    async create(casDTO) {
        const cas = this.casRepository.create(casDTO);
        return await this.casRepository.save(cas);
    }
    async delete(id) {
        return await this.casRepository.delete(id);
    }
    async update(id, dto) {
        return await this.casRepository.update(id, dto);
    }
    async pretraziCasovePoSifri(sifraCasa) {
        const casovi = await this.casRepository.find({
            where: {
                sifra: sifraCasa,
            },
        });
        if (!casovi || casovi.length === 0) {
            throw new common_1.NotFoundException(`Nijedan čas sa nazivom '${sifraCasa}' nije pronađen.`);
        }
        console.log(casovi[0]);
        return casovi[0];
    }
    async countCasoviByPredmetId(predmetId) {
        return this.casRepository.count({ where: { ima: { id: predmetId } } });
    }
    async getPredmetIdByCasId(casId) {
        const cas = await this.casRepository
            .createQueryBuilder('cas')
            .leftJoinAndSelect('cas.ima', 'predmet')
            .where('cas.id = :casId', { casId: casId })
            .getOne();
        return cas.ima.id;
    }
    async getCasIdsByPredmetId(predmetId) {
        const casIds = await this.casRepository
            .createQueryBuilder('cas')
            .leftJoin('cas.ima', 'predmet')
            .where('predmet.id = :predmetId', { predmetId })
            .select('cas.id')
            .getRawMany();
        console.log('evo me', casIds);
        const novi = casIds.map(({ cas_id }) => ({
            cas_id: cas_id,
            casCount: 0,
        }));
        console.log('ovde sad', novi);
        return novi;
    }
    async deleteCasPoPredmetu(idPredmeta) {
        await this.casRepository.delete({
            ima: { id: idPredmeta },
        });
    }
};
exports.CasService = CasService;
exports.CasService = CasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cas_entity_1.Cas)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CasService);
//# sourceMappingURL=cas.service.js.map