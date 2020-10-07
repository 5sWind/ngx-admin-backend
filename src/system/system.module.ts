import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemController } from './system.controller';
import { System } from './system.entity';
import { SystemService } from './system.service';

@Module({
  imports: [TypeOrmModule.forFeature([System])],
  providers: [SystemService],
  controllers: [SystemController],
  exports: [SystemService, TypeOrmModule],
})
export class SystemModule { }
