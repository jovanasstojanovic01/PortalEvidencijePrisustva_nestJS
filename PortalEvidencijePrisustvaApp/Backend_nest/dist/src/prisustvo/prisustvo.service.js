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
exports.PrisustvoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prisustvo_entity_1 = require("./models/prisustvo.entity");
let PrisustvoService = class PrisustvoService {
    constructor(prisustvoRepository) {
        this.prisustvoRepository = prisustvoRepository;
    }
    getAll() {
        return this.prisustvoRepository.find();
    }
    async getById(id) {
        const options = {
            where: { id: id },
        };
        return this.prisustvoRepository.findOne(options);
    }
    async create(prisustvoDTO) {
        const prisustvo = this.prisustvoRepository.create(prisustvoDTO);
        return await this.prisustvoRepository.save(prisustvo);
    }
    async delete(id) {
        return await this.prisustvoRepository.delete(id);
    }
    async update(id) {
        const prisustvo = await this.getById(id);
        if (!prisustvo) {
            throw new common_1.NotFoundException(`Prisustvo with ID ${id} not found`);
        }
        prisustvo.broj_odslusanih_casova += 1;
        return this.prisustvoRepository.update(id, prisustvo);
    }
    async pronadjiPrisustvo(studentId, predmetId) {
        const prisustvo = await this.prisustvoRepository.findOne({
            where: {
                prisustvovao: { id: studentId },
                evidentira: { id: predmetId },
            },
        });
        return prisustvo;
    }
    async getPrisustvaWithStudentInfoByPredmetId(predmetId) {
        return this.prisustvoRepository
            .createQueryBuilder('prisustvo')
            .leftJoinAndSelect('prisustvo.evidentira', 'predmet')
            .leftJoinAndSelect('prisustvo.prisustvovao', 'student')
            .where('predmet.id = :predmetId', { predmetId })
            .select([
            'prisustvo',
            'student.id',
            'student.indeks',
            'student.ime',
            'student.prezime',
        ])
            .getMany();
    }
    async getPrisustvaForStudent(idStudenta) {
        return this.prisustvoRepository
            .createQueryBuilder('prisustvo')
            .select(['prisustvo.id'])
            .innerJoin('prisustvo.prisustvovao', 'student')
            .where('student.id = :idStudenta', { idStudenta })
            .getMany();
    }
    async deletePrisustvaForStudent(idStudenta) {
        const prisustva = await this.getPrisustvaForStudent(idStudenta);
        prisustva.forEach((element) => {
            this.delete(element.id);
        });
    }
    async deletePrisustvoPoPredmetu(idPredmeta) {
        await this.prisustvoRepository.delete({
            evidentira: { id: idPredmeta },
        });
    }
    async getPrisustvaByPredmetId(predmetId) {
        return await this.prisustvoRepository.find({
            where: { evidentira: { id: predmetId } },
        });
    }
    async findAllPredmetiForStudent(studentId) {
        return this.prisustvoRepository
            .createQueryBuilder('prisustvo')
            .select([
            'student.id',
            'predmet.id',
            'predmet.naziv as naziv',
            'prisustvo.broj_odslusanih_casova',
            'prisustvo',
        ])
            .innerJoin('prisustvo.evidentira', 'predmet')
            .innerJoin('prisustvo.prisustvovao', 'student')
            .where('student.id = :studentId', { studentId })
            .getRawMany();
    }
};
exports.PrisustvoService = PrisustvoService;
exports.PrisustvoService = PrisustvoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prisustvo_entity_1.Prisustvo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrisustvoService);
//# sourceMappingURL=prisustvo.service.js.map