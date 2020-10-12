import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSystemDto } from './dto/create-system.dto';
import { System } from './system.entity';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
    constructor(private readonly systemService: SystemService) { }

    @Post()
    create(@Body() createSystemDto: CreateSystemDto): Promise<System> {
        return this.systemService.create(createSystemDto);
    }

    @Get()
    findAll(): Promise<System[]> {
        return this.systemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<System | undefined> {
        return this.systemService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() systemData: CreateSystemDto): Promise<System> {
        return this.systemService.update(id, systemData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.systemService.remove(id);
    }
}