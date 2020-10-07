import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.create(createEmployeeDto);
    }

    @Get()
    findAll(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Employee | undefined> {
        return this.employeeService.findOne(id);
    }

    @Put()
    update(@Body('employee') employeeData: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.update(employeeData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.employeeService.remove(id);
    }
}