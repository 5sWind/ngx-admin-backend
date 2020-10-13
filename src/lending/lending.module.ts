import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Reader } from 'src/reader/reader.entity';
import { LendingController } from './lending.controller';
import { Lending } from './lending.entity';
import { LendingService } from './lending.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lending, Book, Reader, Employee])],
  providers: [LendingService],
  controllers: [LendingController],
  exports: [LendingService, TypeOrmModule],
})
export class LendingModule { }
