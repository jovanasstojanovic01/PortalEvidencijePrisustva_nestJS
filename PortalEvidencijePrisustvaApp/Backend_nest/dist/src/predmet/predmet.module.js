"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredmetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const predmet_service_1 = require("./predmet.service");
const predmet_controller_1 = require("./predmet.controller");
const predmet_entity_1 = require("./models/predmet.entity");
let PredmetModule = class PredmetModule {
};
exports.PredmetModule = PredmetModule;
exports.PredmetModule = PredmetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([predmet_entity_1.Predmet])],
        providers: [predmet_service_1.PredmetService],
        controllers: [predmet_controller_1.PredmetController],
        exports: [predmet_service_1.PredmetService]
    })
], PredmetModule);
//# sourceMappingURL=predmet.module.js.map