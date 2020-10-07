import { Module } from '@nestjs/common';
import { ProcurementService } from './procurement.service';

@Module({
  providers: [ProcurementService]
})
export class ProcurementModule {}
