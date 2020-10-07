import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.create(createBookDto);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Book | undefined> {
        return this.bookService.findOne(id);
    }

    @Put()
    update(@Body('book') bookData: CreateBookDto): Promise<Book> {
        return this.bookService.update(bookData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.bookService.remove(id);
    }
}