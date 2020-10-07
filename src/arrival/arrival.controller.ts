import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateArrivalDto } from './dto/create-arrival.dto';
import { Arrival } from './arrival.entity';
import { ArrivalService } from './arrival.service';

@Controller('arrival')
export class ArrivalController {
    constructor(private readonly arrivalService: ArrivalService) { }

    @Post()
    create(@Body() createArrivalDto: CreateArrivalDto): Promise<Arrival> {
        return this.arrivalService.create(createArrivalDto);
    }

    @Get()
    findAll(): Promise<Arrival[]> {
        return this.arrivalService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Arrival | undefined> {
        return this.arrivalService.findOne(id);
    }

    @Put()
    update(@Body('arrival') arrivalData: CreateArrivalDto): Promise<Arrival> {
        return this.arrivalService.update(arrivalData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.arrivalService.remove(id);
    }
}