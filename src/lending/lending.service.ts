import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { CreateLendingDto } from 'src/lending/dto/create-lending.dto';
import { Lending } from 'src/lending/lending.entity';
import { Reader } from 'src/reader/reader.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LendingService {

    constructor(
        @InjectRepository(Lending)
        private readonly lendingsRepository: Repository<Lending>,
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>,
        @InjectRepository(Reader)
        private readonly readersRepository: Repository<Reader>,
        @InjectRepository(Employee)
        private readonly employeesRepository: Repository<Employee>,
    ) { }

    async create(createLendingDto: CreateLendingDto): Promise<Lending> {
        const lending = new Lending();
        lending.book = await this.booksRepository.findOneOrFail(createLendingDto.bookId);
        lending.reader = await this.readersRepository.findOneOrFail(createLendingDto.readerId);
        lending.employee = await this.employeesRepository.findOneOrFail(createLendingDto.employeeId);
        lending.date = createLendingDto.date;
        lending.return = createLendingDto.return;
        lending.memo = createLendingDto.memo;

        return this.lendingsRepository.save(lending);
    }

    async findAll(): Promise<Lending[]> {
        return this.lendingsRepository.find();
    }

    findOne(id: number): Promise<Lending> {
        return this.lendingsRepository.findOne(id);
    }

    async update(id: string, lendingData: CreateLendingDto): Promise<Lending> {
        const toUpdate = await this.lendingsRepository.findOne(id);
        const newData = Object.assign(toUpdate, lendingData);
        return this.lendingsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.lendingsRepository.delete(id);
    }
}
