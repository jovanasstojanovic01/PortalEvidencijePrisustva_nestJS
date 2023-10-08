"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const cas_entity_1 = require("./src/cas/models/cas.entity");
const predmet_entity_1 = require("./src/predmet/models/predmet.entity");
const prisustvo_entity_1 = require("./src/prisustvo/models/prisustvo.entity");
const profesor_entity_1 = require("./src/profesor/models/profesor.entity");
const administrator_entity_1 = require("./src/relacije/administrator/model/administrator.entity");
const PrisustvoPoCasu_entity_1 = require("./src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity");
const student_entity_1 = require("./src/student/models/student.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '14102001',
    database: 'baza',
    entities: [
        student_entity_1.Student,
        profesor_entity_1.Profesor,
        prisustvo_entity_1.Prisustvo,
        predmet_entity_1.Predmet,
        cas_entity_1.Cas,
        PrisustvoPoCasu_entity_1.PrisustvoPoCasu,
        administrator_entity_1.Administrator,
    ],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map