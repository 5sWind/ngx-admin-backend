
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Procurement } from 'src/procurement/procurement.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum ResultType {
    PASS = 'P',
    INVALID = 'I',
    UNHANDLED = 'U',
}
@Entity()
export class Arrival {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public bookid!: number;

    @Column()
    public procurementid!: string;

    @Column()
    public employeeid!: number;

    @Column({
        type: 'date',
    })
    public date!: Date;

    @Column({
        type: 'int',
        length: 9,
        nullable: true,
    })
    public quantity!: number;

    @Column({
        type: "enum",
        enum: ResultType,
        nullable: true,
    })
    public result!: ResultType;

    @Column({
        type: "int",
        nullable: true,
    })
    public pass!: number;

    @Column({
        type: "int",
        nullable: true,
    })
    public refill!: number;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true,
    })
    public memo!: string;

    @ManyToOne(type => Book, book => book.arrival)
    public book!: Book;

    @ManyToOne(type => Procurement, procurement => procurement.arrival)
    public procurement!: Procurement;

    @ManyToOne(type => Employee, employee => employee.arrival)
    public employee!: Employee;
}