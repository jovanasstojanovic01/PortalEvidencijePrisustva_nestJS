import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorDTO } from './model/administrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly adminService: AdministratorService) {}

  @Post()
  create(@Body() admin: AdministratorDTO): void {
    this.adminService.create(admin);
  }

  @Get('check/:profesor_id')
  checkIfAdminExists(@Param('profesor_id') profesorId: number) {
    return this.adminService.checkIfAdminExists(profesorId);
  }
}
