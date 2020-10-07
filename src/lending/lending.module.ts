import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LendingController } from './lending.controller';
import { Lending } from './lending.entity';
import { LendingService } from './lending.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lending])],
  providers: [LendingService],
  controllers: [LendingController],
  exports: [LendingService, TypeOrmModule],
})
export class LendingModule { }
