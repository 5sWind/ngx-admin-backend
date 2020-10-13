import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from 'src/warehouse/warehouse.entity';
import { BookController } from './book.controller';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Warehouse])],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService, TypeOrmModule],
})
export class BookModule { }
