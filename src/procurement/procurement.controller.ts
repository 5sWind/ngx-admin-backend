import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProcurementDto } from './dto/create-procurement.dto';
import { Procurement } from './procurement.entity';
import { ProcurementService } from './procurement.service';

@Controller('procurement')
export class ProcurementController {
    constructor(private readonly procurementService: ProcurementService) { }

    @Post()
    create(@Body() createProcurementDto: CreateProcurementDto): Promise<Procurement> {
        return this.procurementService.create(createProcurementDto);
    }

    @Get()
    findAll(): Promise<Procurement[]> {
        return this.procurementService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Procurement | undefined> {
        return this.procurementService.findOne(id);
    }

    @Put()
    update(@Body('procurement') procurementData: CreateProcurementDto): Promise<Procurement> {
        return this.procurementService.update(procurementData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.procurementService.remove(id);
    }
}