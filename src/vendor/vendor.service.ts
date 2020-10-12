import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Vendor } from './vendor.entity';

@Injectable()
export class VendorService {

    constructor(
        @InjectRepository(Vendor)
        private readonly vendorsRepository: Repository<Vendor>,
    ) { }

    create(createVendorDto: CreateVendorDto): Promise<Vendor> {
        const vendor = new Vendor();
        vendor.name = createVendorDto.name;
        vendor.address = createVendorDto.address;
        vendor.fax = createVendorDto.fax;
        vendor.contact = createVendorDto.contact;
        vendor.phone = createVendorDto.phone;
        vendor.email = createVendorDto.email;
        vendor.bank = createVendorDto.bank;
        vendor.account = createVendorDto.account;
        vendor.memo = createVendorDto.memo;

        return this.vendorsRepository.save(vendor);
    }

    async findAll(): Promise<Vendor[]> {
        return this.vendorsRepository.find();
    }

    findOne(id: number): Promise<Vendor> {
        return this.vendorsRepository.findOne(id);
    }

    async update(id: string, vendorData: CreateVendorDto): Promise<Vendor> {
        const toUpdate = await this.vendorsRepository.findOne(id);
        const newData = Object.assign(toUpdate, vendorData);
        return this.vendorsRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.vendorsRepository.delete(id);
    }
}
