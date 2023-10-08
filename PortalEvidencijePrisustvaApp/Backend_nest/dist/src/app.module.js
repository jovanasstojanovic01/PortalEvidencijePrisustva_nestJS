"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_controller_1 = require("./student/student.controller");
const profesor_controller_1 = require("./profesor/profesor.controller");
const predmet_controller_1 = require("./predmet/predmet.controller");
const prisustvo_controller_1 = require("./prisustvo/prisustvo.controller");
const cas_controller_1 = require("./cas/cas.controller");
const student_module_1 = require("./student/student.module");
const profesor_module_1 = require("./profesor/profesor.module");
const predmet_module_1 = require("./predmet/predmet.module");
const prisustvo_module_1 = require("./prisustvo/prisustvo.module");
const cas_module_1 = require("./cas/cas.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../typeorm.config");
const auth_module_1 = require("./logovanje/auth/auth.module");
const auth_profesor_module_1 = require("./logovanje/auth-profesor/auth-profesor.module");
const prisustvo_po_casu_controller_1 = require("./relacije/prisustvo-po-casu/prisustvo-po-casu.controller");
const prisustvo_po_casu_module_1 = require("./relacije/prisustvo-po-casu/prisustvo-po-casu.module");
const administrator_controller_1 = require("./relacije/administrator/administrator.controller");
const administrator_module_1 = require("./relacije/administrator/administrator.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            student_module_1.StudentModule,
            profesor_module_1.ProfesorModule,
            predmet_module_1.PredmetModule,
            prisustvo_module_1.PrisustvoModule,
            cas_module_1.CasModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            auth_module_1.AuthModule,
            auth_profesor_module_1.AuthProfesorModule,
            prisustvo_po_casu_module_1.PrisustvoPoCasuModule,
            administrator_module_1.AdministratorModule,
        ],
        controllers: [
            app_controller_1.AppController,
            student_controller_1.StudentController,
            profesor_controller_1.ProfesorController,
            predmet_controller_1.PredmetController,
            prisustvo_controller_1.PrisustvoController,
            cas_controller_1.CasController,
            prisustvo_po_casu_controller_1.PrisustvoPoCasuController,
            administrator_controller_1.AdministratorController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map