import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './model/administrator.entity';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  providers: [AdministratorService],
  controllers: [AdministratorController],
  exports: [AdministratorService],
})
export class AdministratorModule {}
