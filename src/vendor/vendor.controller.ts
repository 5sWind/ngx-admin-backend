import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Vendor } from './vendor.entity';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService) { }

    @Post()
    create(@Body() createVendorDto: CreateVendorDto): Promise<Vendor> {
        return this.vendorService.create(createVendorDto);
    }

    @Get()
    findAll(): Promise<Vendor[]> {
        return this.vendorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Vendor | undefined> {
        return this.vendorService.findOne(id);
    }

    @Put()
    update(@Body('vendor') vendorData: CreateVendorDto): Promise<Vendor> {
        return this.vendorService.update(vendorData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.vendorService.remove(id);
    }
}