import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/department/department.entity';
import { Repository } from 'typeorm';
import { CreateSystemDto } from './dto/create-system.dto';
import { System } from './system.entity';

@Injectable()
export class SystemService {

    constructor(
        @InjectRepository(System)
        private readonly systemsRepository: Repository<System>,
        @InjectRepository(Department)
        private readonly departmentsRepository: Repository<Department>,
    ) { }

    async create(createSystemDto: CreateSystemDto): Promise<System> {
        const system = new System();
        system.department = await this.departmentsRepository.findOneOrFail(createSystemDto.departmentId);
        system.name = createSystemDto.name;
        system.location = createSystemDto.location;
        system.source = createSystemDto.source;
        system.memo = createSystemDto.memo;

        return this.systemsRepository.save(system);
    }

    async findAll(): Promise<System[]> {
        return this.systemsRepository.find();
    }

    findOne(id: number): Promise<System> {
        return this.systemsRepository.findOne(id);
    }

    async update(id: string, systemData: CreateSystemDto): Promise<System> {
        const toUpdate = await this.systemsRepository.findOne(id);
        const newData = Object.assign(toUpdate, systemData);
        return this.systemsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.systemsRepository.delete(id);
    }
}
