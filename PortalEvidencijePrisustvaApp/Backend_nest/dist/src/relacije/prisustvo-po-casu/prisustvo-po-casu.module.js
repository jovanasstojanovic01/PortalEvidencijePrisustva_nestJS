"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrisustvoPoCasuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PrisustvoPoCasu_entity_1 = require("./model/PrisustvoPoCasu.entity");
const prisustvo_po_casu_service_1 = require("./prisustvo-po-casu.service");
const prisustvo_po_casu_controller_1 = require("./prisustvo-po-casu.controller");
const prisustvo_service_1 = require("../../prisustvo/prisustvo.service");
const prisustvo_entity_1 = require("../../prisustvo/models/prisustvo.entity");
let PrisustvoPoCasuModule = class PrisustvoPoCasuModule {
};
exports.PrisustvoPoCasuModule = PrisustvoPoCasuModule;
exports.PrisustvoPoCasuModule = PrisustvoPoCasuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PrisustvoPoCasu_entity_1.PrisustvoPoCasu, prisustvo_entity_1.Prisustvo])],
        providers: [prisustvo_po_casu_service_1.PrisustvoPoCasuService, prisustvo_service_1.PrisustvoService],
        controllers: [prisustvo_po_casu_controller_1.PrisustvoPoCasuController],
        exports: [prisustvo_po_casu_service_1.PrisustvoPoCasuService],
    })
], PrisustvoPoCasuModule);
//# sourceMappingURL=prisustvo-po-casu.module.js.map