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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./models/student.entity");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
        this.list = [
            {
                id: 0,
                email: '',
                password: '',
                ime: '',
                prezime: '',
                indeks: 18417,
                prisustvovao: [],
            },
        ];
    }
    getAll() {
        return this.studentRepository.find();
    }
    async getById(id) {
        const options = {
            where: { id: id },
        };
        return this.studentRepository.findOne(options);
    }
    async create(studentDTO) {
        const student = this.studentRepository.create(studentDTO);
        return await this.studentRepository.save(student);
    }
    async delete(id) {
        return await this.studentRepository.delete(id);
    }
    async update(id, dto) {
        return await this.studentRepository.update(id, dto);
    }
    async findByEmail(email) {
        const student = await this.studentRepository.findOne({ where: { email } });
        if (!student) {
            throw new common_1.NotFoundException(`Student with email ${email} not found`);
        }
        return student;
    }
    async findByIndeks(indeks) {
        const student = await this.studentRepository.findOne({ where: { indeks } });
        if (!student) {
            throw new common_1.NotFoundException(`Student with email ${indeks} not found`);
        }
        return student;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map