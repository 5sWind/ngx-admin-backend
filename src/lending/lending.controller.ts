import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLendingDto } from './dto/create-lending.dto';
import { Lending } from './lending.entity';
import { LendingService } from './lending.service';

@Controller('lending')
export class LendingController {
    constructor(private readonly lendingService: LendingService) { }

    @Post()
    create(@Body() createLendingDto: CreateLendingDto): Promise<Lending> {
        return this.lendingService.create(createLendingDto);
    }

    @Get()
    findAll(): Promise<Lending[]> {
        return this.lendingService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Lending | undefined> {
        return this.lendingService.findOne(id);
    }

    @Put()
    update(@Body('lending') lendingData: CreateLendingDto): Promise<Lending> {
        return this.lendingService.update(lendingData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.lendingService.remove(id);
    }
}