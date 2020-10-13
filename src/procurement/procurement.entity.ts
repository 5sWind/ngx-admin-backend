
import { Arrival } from 'src/arrival/arrival.entity';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

export enum StateType {
    DELIVERED = 'D',
    PURCHASING = 'P',
    UNHANDLED = 'U',
}
@Entity()
export class Procurement {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('int', { nullable: true })
    public bookId!: number;

    @Column('int', { nullable: true })
    public vendorId!: number;

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
        type: 'money',
    })
    public price!: number;

    @Column({
        type: "enum",
        enum: StateType,
        nullable: true,
    })
    public state!: StateType;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true,
    })
    public memo!: string;

    @ManyToOne(type => Book, book => book.procurement)
    @JoinColumn({ name: 'bookId' })
    public book!: Book;

    @ManyToOne(type => Vendor, vendor => vendor.procurement)
    @JoinColumn({ name: 'vendorId' })
    public vendor!: Vendor;

    @ManyToOne(type => Employee, employee => employee.procurement)
    @JoinColumn({ name: 'employeeId' })
    public employee!: Employee;

    @OneToMany(type => Arrival, arrival => arrival.procurement)
    public arrival!: Arrival[];
}