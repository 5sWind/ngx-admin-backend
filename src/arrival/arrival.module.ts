import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArrivalController } from './arrival.controller';
import { Arrival } from './arrival.entity';
import { ArrivalService } from './arrival.service';

@Module({
  imports: [TypeOrmModule.forFeature([Arrival])],
  providers: [ArrivalService],
  controllers: [ArrivalController],
  exports: [ArrivalService, TypeOrmModule],
})
export class ArrivalModule { }
