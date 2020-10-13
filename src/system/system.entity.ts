
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Department } from "../department/department.entity";

@Entity()
export class System {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { nullable: true })
    departmentId: number;

    @ManyToOne(type => Department, department => department.system)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @Column({
        type: "varchar",
        length: 255,
        unique: true,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 4,
        nullable: true
    })
    location: string;

    @Column({
        type: "varchar",
        length: 2083,
        nullable: true
    })
    source: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    memo: string;
}