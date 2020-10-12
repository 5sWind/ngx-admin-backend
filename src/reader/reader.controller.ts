import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { Reader } from './reader.entity';
import { ReaderService } from './reader.service';

@Controller('reader')
export class ReaderController {
    constructor(private readonly readerService: ReaderService) { }

    @Post()
    create(@Body() createReaderDto: CreateReaderDto): Promise<Reader> {
        return this.readerService.create(createReaderDto);
    }

    @Get()
    findAll(): Promise<Reader[]> {
        return this.readerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Reader | undefined> {
        return this.readerService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() readerData: CreateReaderDto): Promise<Reader> {
        return this.readerService.update(id, readerData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.readerService.remove(id);
    }
}