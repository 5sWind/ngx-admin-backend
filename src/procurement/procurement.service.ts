import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Repository } from 'typeorm';
import { CreateProcurementDto } from './dto/create-procurement.dto';
import { Procurement } from './procurement.entity';

@Injectable()
export class ProcurementService {

    constructor(
        @InjectRepository(Procurement)
        private readonly procurementsRepository: Repository<Procurement>,
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>,
        @InjectRepository(Vendor)
        private readonly vendorsRepository: Repository<Vendor>,
        @InjectRepository(Employee)
        private readonly employeesRepository: Repository<Employee>,
    ) { }

    async create(createProcurementDto: CreateProcurementDto): Promise<Procurement> {
        const procurement = new Procurement();
        procurement.book = await this.booksRepository.findOneOrFail(createProcurementDto.bookId);
        procurement.vendor = await this.vendorsRepository.findOneOrFail(createProcurementDto.vendorId);
        procurement.employee = await this.employeesRepository.findOneOrFail(createProcurementDto.employeeId);
        procurement.date = createProcurementDto.date;
        procurement.quantity = createProcurementDto.quantity;
        procurement.price = createProcurementDto.price;
        procurement.state = createProcurementDto.state;
        procurement.memo = createProcurementDto.memo;

        return this.procurementsRepository.save(procurement);
    }

    async findAll(): Promise<Procurement[]> {
        return this.procurementsRepository.find();
    }

    findOne(id: number): Promise<Procurement> {
        return this.procurementsRepository.findOne(id);
    }

    async update(id: string, procurementData: CreateProcurementDto): Promise<Procurement> {
        const toUpdate = await this.procurementsRepository.findOne(id);
        const newData = Object.assign(toUpdate, procurementData);
        return this.procurementsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.procurementsRepository.delete(id);
    }
}
