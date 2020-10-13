import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { WarehouseController } from './warehouse.controller';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse, Employee])],
  providers: [WarehouseService],
  controllers: [WarehouseController],
  exports: [WarehouseService, TypeOrmModule],
})
export class WarehouseModule {}
