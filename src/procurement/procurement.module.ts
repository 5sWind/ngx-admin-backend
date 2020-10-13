import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { ProcurementController } from './procurement.controller';
import { Procurement } from './procurement.entity';
import { ProcurementService } from './procurement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Procurement, Book, Vendor, Employee])],
  providers: [ProcurementService],
  controllers: [ProcurementController],
  exports: [ProcurementService, TypeOrmModule],
})
export class ProcurementModule { }
