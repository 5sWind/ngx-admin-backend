
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Procurement } from 'src/procurement/procurement.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

export enum ResultType {
    PASS = 'P',
    INVALID = 'I',
    UNHANDLED = 'U',
}
@Entity()
export class Arrival {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('int', { nullable: true })
    public bookId!: number;

    @Column('int', { nullable: true })
    public procurementId!: number;

    @Column('int', { nullable: true })
    public employeeId!: number;

    @Column({
        type: 'date',
    })
    public date!: Date;

    @Column({
        type: 'int',
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
    @JoinColumn({ name: 'bookId' })
    public book!: Book;

    @ManyToOne(type => Procurement, procurement => procurement.arrival)
    @JoinColumn({ name: 'procurementId' })
    public procurement!: Procurement;

    @ManyToOne(type => Employee, employee => employee.arrival)
    @JoinColumn({ name: 'employeeId' })
    public employee!: Employee;
}