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
exports.ProfesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profesor_entity_1 = require("./models/profesor.entity");
let ProfesorService = class ProfesorService {
    constructor(profesorRepository) {
        this.profesorRepository = profesorRepository;
        this.list = [
            {
                id: 0,
                email: '',
                password: '',
                ime: '',
                prezime: '',
                drzi: [],
            },
        ];
    }
    getAll() {
        return this.profesorRepository.find();
    }
    async getById(id) {
        console.log('ovde');
        const options = {
            where: { id: id },
        };
        return this.profesorRepository.findOne(options);
    }
    async create(profesorDTO) {
        const profesor = this.profesorRepository.create(profesorDTO);
        return await this.profesorRepository.save(profesor);
    }
    async delete(id) {
        return await this.profesorRepository.delete(id);
    }
    async update(id, dto) {
        return await this.profesorRepository.update(id, dto);
    }
    async findByEmail(email) {
        const profesor = await this.profesorRepository.findOne({
            where: { email },
        });
        if (!profesor) {
            return null;
        }
        return profesor;
    }
    async getPredmetiByProfesorId(profesorId) {
        const profesor = await this.profesorRepository.find({
            where: { id: profesorId },
            relations: ['drzi'],
        });
        if (!profesor[0]) {
            return null;
        }
        return profesor[0].drzi;
    }
};
exports.ProfesorService = ProfesorService;
exports.ProfesorService = ProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profesor_entity_1.Profesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfesorService);
//# sourceMappingURL=profesor.service.js.map