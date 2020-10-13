import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'src/department/department.entity';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Department])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService, TypeOrmModule],
})
export class EmployeeModule { }
