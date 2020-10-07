import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @Post()
    create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        return this.departmentService.create(createDepartmentDto);
    }

    @Get()
    findAll(): Promise<Department[]> {
        return this.departmentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Department | undefined> {
        return this.departmentService.findOne(id);
    }

    @Put()
    update(@Body('department') departmentData: CreateDepartmentDto): Promise<Department> {
        return this.departmentService.update(departmentData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.departmentService.remove(id);
    }
}