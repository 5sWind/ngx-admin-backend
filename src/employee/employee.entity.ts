import { Arrival } from 'src/arrival/arrival.entity';
import { Department } from 'src/department/department.entity';
import { Lending } from 'src/lending/lending.entity';
import { Procurement } from 'src/procurement/procurement.entity';
import { Warehouse } from 'src/warehouse/warehouse.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';

export enum GenderType {
    MALE = 'M',
    FEMALE = 'F',
    UNDECLARED = 'U'
}
export enum EducationType {
    NOTAPPLY = 'N',
    COLLEGE = 'C',
    BACHELOR = 'B',
    MASTER = 'M',
    DOCTOR = 'D'
}
@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Department, department => department.employees)
    department: Department;

    @Column({
        type: "varchar",
        length: 100,
    })
    name: string;

    @Column({
        type: "enum",
        enum: GenderType,
        nullable: true,
    })
    gender: GenderType;

    @Column({
        type: "date",
        nullable: true,
    })
    birthday: Date;

    @Column({
        type: "enum",
        enum: EducationType,
        nullable: true,
    })
    education: EducationType;

    @Column({
        type: "varchar",
        length: 30,
    })
    title: string;

    @Column({
        type: "varchar",
        length: 15,
        nullable: true,
        unique: true
    })
    phone: string;

    @Column({
        type: "varchar",
        length: 254,
        nullable: true,
        unique: true
    })
    email: string;

    @Column({
        type: "date",
        nullable: true,
    })
    contract: Date;

    @Column({
        type: "date",
        nullable: true,
    })
    enrollment: Date;

    @Column({
        type: "date",
        nullable: true,
    })
    resign: Date;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true,
    })
    memo: string;

    @OneToOne(type => Warehouse, warehouse => warehouse.employee)
    warehouse: Warehouse;

    @OneToMany(type => Procurement, procurement => procurement.employee)
    public procurement!: Procurement[];

    @OneToMany(type => Lending, lending => lending.employee)
    public lending!: Lending[];

    @OneToMany(type => Arrival, arrival => arrival.employee)
    public arrival!: Arrival[];
}