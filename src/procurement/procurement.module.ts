import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcurementController } from './procurement.controller';
import { Procurement } from './procurement.entity';
import { ProcurementService } from './procurement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Procurement])],
  providers: [ProcurementService],
  controllers: [ProcurementController],
  exports: [ProcurementService, TypeOrmModule],
})
export class ProcurementModule { }
