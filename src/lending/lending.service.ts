import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLendingDto } from 'src/lending/dto/create-lending.dto';
import { Lending } from 'src/lending/lending.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LendingService {

    constructor(
        @InjectRepository(Lending)
        private readonly lendingsRepository: Repository<Lending>,
    ) { }

    create(createLendingDto: CreateLendingDto): Promise<Lending> {
        const lending = new Lending();
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

    async update(lendingData: any): Promise<Lending> {
        const toUpdate = await this.lendingsRepository.findOne(lendingData.id);
        const newData = Object.assign(toUpdate, lendingData);
        return this.lendingsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.lendingsRepository.delete(id);
    }
}
