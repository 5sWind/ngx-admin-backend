import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
    constructor(private readonly warehouseService: WarehouseService) { }

    @Post()
    create(@Body() createWarehouseDto: CreateWarehouseDto): Promise<Warehouse> {
        return this.warehouseService.create(createWarehouseDto);
    }

    @Get()
    findAll(): Promise<Warehouse[]> {
        return this.warehouseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Warehouse | undefined> {
        return this.warehouseService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() warehouseData: CreateWarehouseDto): Promise<Warehouse> {
        return this.warehouseService.update(id, warehouseData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.warehouseService.remove(id);
    }
}