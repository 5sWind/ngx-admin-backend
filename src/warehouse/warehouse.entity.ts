import { Book } from 'src/book/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Employee } from "../employee/employee.entity";

@Entity()
export class Warehouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { nullable: true })
    employeeId: number;

    @OneToOne(type => Employee, employee => employee.warehouse)
    @JoinColumn({ name: 'employeeId' })
    employee: Employee;

    @Column({
        type: "varchar",
        length: 8,
        unique: true,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 255,
    })
    address: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    memo: string;

    @OneToMany(() => Book, book => book.warehouse)
    books: Book[];
}