import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcurementDto } from './dto/create-procurement.dto';
import { Procurement } from './procurement.entity';

@Injectable()
export class ProcurementService {

    constructor(
        @InjectRepository(Procurement)
        private readonly procurementsRepository: Repository<Procurement>,
    ) { }

    create(createProcurementDto: CreateProcurementDto): Promise<Procurement> {
        const procurement = new Procurement();
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
