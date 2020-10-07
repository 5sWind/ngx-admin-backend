import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorController } from './vendor.controller';
import { Vendor } from './vendor.entity';
import { VendorService } from './vendor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  providers: [VendorService],
  controllers: [VendorController],
  exports: [VendorService, TypeOrmModule],
})
export class VendorModule { }
