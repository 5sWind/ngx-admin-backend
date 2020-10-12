import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private readonly employeesRepository: Repository<Employee>,
    ) { }

    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        const employee = new Employee();
        employee.name = createEmployeeDto.name;
        employee.gender = createEmployeeDto.gender;
        employee.birthday = createEmployeeDto.birthday;
        employee.education = createEmployeeDto.education;
        employee.title = createEmployeeDto.title;
        employee.phone = createEmployeeDto.phone;
        employee.email = createEmployeeDto.email;
        employee.contract = createEmployeeDto.contract;
        employee.enrollment = createEmployeeDto.enrollment;
        employee.resign = createEmployeeDto.resign;
        employee.memo = createEmployeeDto.memo;

        return this.employeesRepository.save(employee);
    }

    async findAll(): Promise<Employee[]> {
        return this.employeesRepository.find();
    }

    findOne(id: number): Promise<Employee> {
        return this.employeesRepository.findOne(id);
    }

    async update(id: string, employeeData: CreateEmployeeDto): Promise<Employee> {
        const toUpdate = await this.employeesRepository.findOne(id);
        const newData = Object.assign(toUpdate, employeeData);
        return this.employeesRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.employeesRepository.delete(id);
    }
}
