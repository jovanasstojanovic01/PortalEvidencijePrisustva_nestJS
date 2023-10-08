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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisustvo = void 0;
const predmet_entity_1 = require("../../predmet/models/predmet.entity");
const PrisustvoPoCasu_entity_1 = require("../../relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity");
const student_entity_1 = require("../../student/models/student.entity");
const typeorm_1 = require("typeorm");
let Prisustvo = class Prisustvo {
};
exports.Prisustvo = Prisustvo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prisustvo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.prisustvovao),
    (0, typeorm_1.JoinColumn)({ name: 'student_id' }),
    __metadata("design:type", student_entity_1.Student)
], Prisustvo.prototype, "prisustvovao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Prisustvo.prototype, "broj_odslusanih_casova", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => predmet_entity_1.Predmet, (predmet) => predmet.evidentira),
    (0, typeorm_1.JoinColumn)({ name: 'predmet_id' }),
    __metadata("design:type", predmet_entity_1.Predmet)
], Prisustvo.prototype, "evidentira", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PrisustvoPoCasu_entity_1.PrisustvoPoCasu, (prisustvoPoCasu) => prisustvoPoCasu.prisustvo),
    __metadata("design:type", Array)
], Prisustvo.prototype, "prisustvoPoCasu", void 0);
exports.Prisustvo = Prisustvo = __decorate([
    (0, typeorm_1.Entity)()
], Prisustvo);
//# sourceMappingURL=prisustvo.entity.js.map