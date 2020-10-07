import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDto } from 'src/department/dto/create-department.dto';
import { Department } from 'src/department/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {

    constructor(
        @InjectRepository(Department)
        private readonly departmentsRepository: Repository<Department>,
    ) { }

    create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const department = new Department();
        department.name = createDepartmentDto.name;
        department.memo = createDepartmentDto.memo;

        return this.departmentsRepository.save(department);
    }

    async findAll(): Promise<Department[]> {
        return this.departmentsRepository.find();
    }

    findOne(id: number): Promise<Department> {
        return this.departmentsRepository.findOne(id);
    }

    async update(departmentData: any): Promise<Department> {
        const toUpdate = await this.departmentsRepository.findOne(departmentData.id);
        const newData = Object.assign(toUpdate, departmentData);
        return this.departmentsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.departmentsRepository.delete(id);
    }
}
