import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Procurement } from 'src/procurement/procurement.entity';
import { Repository } from 'typeorm';
import { Arrival } from './arrival.entity';
import { CreateArrivalDto } from './dto/create-arrival.dto';

@Injectable()
export class ArrivalService {

    constructor(
        @InjectRepository(Arrival)
        private readonly arrivalsRepository: Repository<Arrival>,
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>,
        @InjectRepository(Procurement)
        private readonly procurementsRepository: Repository<Procurement>,
        @InjectRepository(Employee)
        private readonly employeesRepository: Repository<Employee>,
    ) { }

    async create(createArrivalDto: CreateArrivalDto): Promise<Arrival> {
        const arrival = new Arrival();
        arrival.book = await this.booksRepository.findOneOrFail(createArrivalDto.bookId);
        arrival.procurement = await this.procurementsRepository.findOneOrFail(createArrivalDto.procurementId);
        arrival.employee = await this.employeesRepository.findOneOrFail(createArrivalDto.employeeId);
        arrival.date = createArrivalDto.date;
        arrival.quantity = createArrivalDto.quantity;
        arrival.result = createArrivalDto.result;
        arrival.pass = createArrivalDto.pass;
        arrival.refill = createArrivalDto.refill;
        arrival.memo = createArrivalDto.memo;

        return this.arrivalsRepository.save(arrival);
    }

    async findAll(): Promise<Arrival[]> {
        return this.arrivalsRepository.find();
    }

    findOne(id: number): Promise<Arrival> {
        return this.arrivalsRepository.findOne(id);
    }

    async update(id: string, arrivalData: CreateArrivalDto): Promise<Arrival> {
        const toUpdate = await this.arrivalsRepository.findOne(id);
        const newData = Object.assign(toUpdate, arrivalData);
        return this.arrivalsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.arrivalsRepository.delete(id);
    }
}
