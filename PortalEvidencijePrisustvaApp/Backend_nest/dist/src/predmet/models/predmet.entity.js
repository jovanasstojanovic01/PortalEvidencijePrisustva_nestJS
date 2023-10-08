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
exports.Predmet = void 0;
const cas_entity_1 = require("../../cas/models/cas.entity");
const prisustvo_entity_1 = require("../../prisustvo/models/prisustvo.entity");
const profesor_entity_1 = require("../../profesor/models/profesor.entity");
const typeorm_1 = require("typeorm");
let Predmet = class Predmet {
};
exports.Predmet = Predmet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Predmet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Predmet.prototype, "naziv", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, (profesor) => profesor.drzi),
    (0, typeorm_1.JoinColumn)({ name: 'profesor_id' }),
    __metadata("design:type", profesor_entity_1.Profesor)
], Predmet.prototype, "drzi", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cas_entity_1.Cas, (cas) => cas.ima),
    __metadata("design:type", Array)
], Predmet.prototype, "ima", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prisustvo_entity_1.Prisustvo, (prisustvo) => prisustvo.evidentira),
    __metadata("design:type", Array)
], Predmet.prototype, "evidentira", void 0);
exports.Predmet = Predmet = __decorate([
    (0, typeorm_1.Entity)()
], Predmet);
//# sourceMappingURL=predmet.entity.js.map