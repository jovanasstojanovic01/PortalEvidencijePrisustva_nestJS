/* eslint-disable prettier/prettier */
import { Cas } from 'src/cas/models/cas.entity';
import { Predmet } from 'src/predmet/models/predmet.entity';
import { Prisustvo } from 'src/prisustvo/models/prisustvo.entity';
import { Profesor } from 'src/profesor/models/profesor.entity';
import { Administrator } from 'src/relacije/administrator/model/administrator.entity';
import { PrisustvoPoCasu } from 'src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity';
import { Student } from 'src/student/models/student.entity';
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '14102001',
  database: 'baza',
  entities: [
    Student,
    Profesor,
    Prisustvo,
    Predmet,
    Cas,
    PrisustvoPoCasu,
    Administrator,
  ],
  synchronize: true,
};
