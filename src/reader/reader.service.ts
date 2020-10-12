import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReaderDto } from 'src/reader/dto/create-reader.dto';
import { Reader } from 'src/reader/reader.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReaderService {

    constructor(
        @InjectRepository(Reader)
        private readonly readersRepository: Repository<Reader>,
    ) { }

    create(createReaderDto: CreateReaderDto): Promise<Reader> {
        const reader = new Reader();
        reader.cardno = createReaderDto.cardno;
        reader.type = createReaderDto.type;
        reader.expiration = createReaderDto.expiration;
        reader.name = createReaderDto.name;
        reader.idno = createReaderDto.idno;
        reader.phone = createReaderDto.phone;
        reader.email = createReaderDto.email;
        reader.register = createReaderDto.register;
        reader.cancel = createReaderDto.cancel;
        reader.memo = createReaderDto.memo;

        return this.readersRepository.save(reader);
    }

    async findAll(): Promise<Reader[]> {
        return this.readersRepository.find();
    }

    findOne(id: number): Promise<Reader> {
        return this.readersRepository.findOne(id);
    }

    async update(id: string, readerData: CreateReaderDto): Promise<Reader> {
        const toUpdate = await this.readersRepository.findOne(id);
        const newData = Object.assign(toUpdate, readerData);
        return this.readersRepository.save(newData);
    }

    async remove(id: string): Promise<void> {
        await this.readersRepository.delete(id);
    }
}
