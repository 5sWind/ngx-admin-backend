import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReaderController } from './reader.controller';
import { Reader } from './reader.entity';
import { ReaderService } from './reader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reader])],
  providers: [ReaderService],
  controllers: [ReaderController],
  exports: [ReaderService, TypeOrmModule],
})
export class ReaderModule {}
