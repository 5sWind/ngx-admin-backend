import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arrival } from './arrival.entity';
import { CreateArrivalDto } from './dto/create-arrival.dto';

@Injectable()
export class ArrivalService {

    constructor(
        @InjectRepository(Arrival)
        private readonly arrivalsRepository: Repository<Arrival>,
    ) { }

    create(createArrivalDto: CreateArrivalDto): Promise<Arrival> {
        const arrival = new Arrival();
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

    async update(arrivalData: any): Promise<Arrival> {
        const toUpdate = await this.arrivalsRepository.findOne(arrivalData.id);
        const newData = Object.assign(toUpdate, arrivalData);
        return this.arrivalsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.arrivalsRepository.delete(id);
    }
}
