import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'src/department/department.entity';
import { SystemController } from './system.controller';
import { System } from './system.entity';
import { SystemService } from './system.service';

@Module({
  imports: [TypeOrmModule.forFeature([System, Department])],
  providers: [SystemService],
  controllers: [SystemController],
  exports: [SystemService, TypeOrmModule],
})
export class SystemModule { }
