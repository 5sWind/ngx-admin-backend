import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Reader } from 'src/reader/reader.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Lending {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'date',
    })
    public date!: Date;

    @Column({
        type: 'date',
        nullable: true,
    })
    public return!: Date;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true,
    })
    public memo!: string;

    @ManyToOne(type => Book, book => book.lending)
    public book!: Book;

    @ManyToOne(type => Reader, reader => reader.lending)
    public reader!: Reader;

    @ManyToOne(type => Employee, employee => employee.lending)
    public employee!: Employee;
}