import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehouseService {
    constructor(
        @InjectRepository(Warehouse)
        private readonly warehousesRepository: Repository<Warehouse>,
    ) { }

    create(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse> {
        const warehouse = new Warehouse();
        warehouse.name = createWarehouseDto.name;
        warehouse.address = createWarehouseDto.address;
        warehouse.memo = createWarehouseDto.memo;

        return this.warehousesRepository.save(warehouse);
    }

    async findAll(): Promise<Warehouse[]> {
        return this.warehousesRepository.find();
    }

    findOne(id: number): Promise<Warehouse> {
        return this.warehousesRepository.findOne(id);
    }

    async update(id: string, warehouseData: CreateWarehouseDto): Promise<Warehouse> {
        const toUpdate = await this.warehousesRepository.findOne(id);
        const newData = Object.assign(toUpdate, warehouseData);
        return this.warehousesRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.warehousesRepository.delete(id);
    }
}
