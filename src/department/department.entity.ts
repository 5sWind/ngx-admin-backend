import { Employee } from 'src/employee/employee.entity';
import { System } from 'src/system/system.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 30,
        unique: true
    })
    name: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    memo: string;

    @OneToMany(() => System, system => system.department)
    system: System[];

    @OneToMany(() => Employee, employee => employee.department)
    employees: Employee[];
}