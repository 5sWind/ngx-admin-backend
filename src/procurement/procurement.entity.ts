
import { Arrival } from 'src/arrival/arrival.entity';
import { Book } from 'src/book/book.entity';
import { Employee } from 'src/employee/employee.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

export enum StateType {
    DELIVERED = 'D',
    PURCHASING = 'P',
    UNHANDLED = 'U',
}
@Entity()
export class Procurement {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public bookid!: number;

    @Column()
    public vendorid!: number;

    @Column()
    public employeeid!: number;

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
        length: 8,
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
    public book!: Book;

    @ManyToOne(type => Vendor, vendor => vendor.procurement)
    public vendor!: Vendor;

    @ManyToOne(type => Employee, employee => employee.procurement)
    public employee!: Employee;

    @OneToMany(type => Arrival, arrival => arrival.procurement)
    public arrival!: Arrival[];
}