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
exports.PrisustvoPoCasu = void 0;
const cas_entity_1 = require("../../../cas/models/cas.entity");
const prisustvo_entity_1 = require("../../../prisustvo/models/prisustvo.entity");
const typeorm_1 = require("typeorm");
let PrisustvoPoCasu = class PrisustvoPoCasu {
};
exports.PrisustvoPoCasu = PrisustvoPoCasu;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PrisustvoPoCasu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prisustvo_entity_1.Prisustvo, (prisustvo) => prisustvo.prisustvoPoCasu),
    (0, typeorm_1.JoinColumn)({ name: 'prisustvo_id' }),
    __metadata("design:type", prisustvo_entity_1.Prisustvo)
], PrisustvoPoCasu.prototype, "prisustvo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cas_entity_1.Cas, (cas) => cas.prisustvoPoCasu),
    (0, typeorm_1.JoinColumn)({ name: 'cas_id' }),
    __metadata("design:type", cas_entity_1.Cas)
], PrisustvoPoCasu.prototype, "cas", void 0);
exports.PrisustvoPoCasu = PrisustvoPoCasu = __decorate([
    (0, typeorm_1.Entity)()
], PrisustvoPoCasu);
//# sourceMappingURL=PrisustvoPoCasu.entity.js.map