import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Procurement } from 'src/procurement/procurement.entity';
import { ArrivalController } from './arrival.controller';
import { Arrival } from './arrival.entity';
import { ArrivalService } from './arrival.service';

@Module({
  imports: [TypeOrmModule.forFeature([Arrival, Book, Procurement, Employee])],
  providers: [ArrivalService],
  controllers: [ArrivalController],
  exports: [ArrivalService, TypeOrmModule],
})
export class ArrivalModule { }
