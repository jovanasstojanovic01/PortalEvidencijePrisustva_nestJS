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
exports.PrisustvoPoCasuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PrisustvoPoCasu_entity_1 = require("./model/PrisustvoPoCasu.entity");
const typeorm_2 = require("typeorm");
const prisustvo_service_1 = require("../../prisustvo/prisustvo.service");
let PrisustvoPoCasuService = class PrisustvoPoCasuService {
    constructor(prisustvoPoCasuRepository, prisustvoService) {
        this.prisustvoPoCasuRepository = prisustvoPoCasuRepository;
        this.prisustvoService = prisustvoService;
    }
    async proveriPrisustvoPoCasu(casId, prisustvoId) {
        return this.prisustvoPoCasuRepository.findOne({
            where: {
                cas: { id: casId },
                prisustvo: { id: prisustvoId },
            },
        });
    }
    async create(createDto) {
        const prisustvoPoCasu = this.prisustvoPoCasuRepository.create(createDto);
        return await this.prisustvoPoCasuRepository.save(prisustvoPoCasu);
    }
    async countPrisustvoPoCasuByCasAndPredmet(predmetId) {
        const casovi = await this.prisustvoPoCasuRepository
            .createQueryBuilder('prisustvoPoCasu')
            .leftJoinAndSelect('prisustvoPoCasu.cas', 'cas')
            .leftJoinAndSelect('cas.ima', 'predmet')
            .where('predmet.id = :predmetId', { predmetId })
            .select('cas.id')
            .addSelect('COUNT(cas.id)', 'casCount')
            .groupBy('cas.id')
            .getRawMany();
        const casoviSaBrojem = casovi.map(({ cas_id, casCount }) => ({
            cas_id,
            casCount: parseInt(casCount),
        }));
        console.log(casoviSaBrojem);
        return casoviSaBrojem;
    }
    async deletePrisustvaForStudent(idStudenta) {
        try {
            const prisustva = await this.prisustvoService.getPrisustvaForStudent(idStudenta);
            for (const prisustvo of prisustva) {
                await this.prisustvoPoCasuRepository.delete({
                    prisustvo: { id: prisustvo.id },
                });
            }
        }
        catch (error) {
            console.error('Greška prilikom brisanja prisustvaPoCasu:', error);
            throw error;
        }
    }
    async deletePrisustvaForPisustvo(idPrisustva) {
        await this.prisustvoPoCasuRepository.delete({
            prisustvo: { id: idPrisustva },
        });
    }
};
exports.PrisustvoPoCasuService = PrisustvoPoCasuService;
exports.PrisustvoPoCasuService = PrisustvoPoCasuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PrisustvoPoCasu_entity_1.PrisustvoPoCasu)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        prisustvo_service_1.PrisustvoService])
], PrisustvoPoCasuService);
//# sourceMappingURL=prisustvo-po-casu.service.js.map