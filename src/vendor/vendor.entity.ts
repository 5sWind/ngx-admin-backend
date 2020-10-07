import { Procurement } from 'src/procurement/procurement.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 255,
        unique: true,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })
    address: string;

    @Column({
        type: "varchar",
        length: 15,
        nullable: true
    })
    fax: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })
    contact: string;

    @Column({
        type: "varchar",
        length: 15,
        nullable: true
    })
    phone: string;

    @Column({
        type: "varchar",
        length: 254,
        unique: true,
        nullable: true,
    })
    email: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })
    bank: string;

    @Column({
        type: "varchar",
        length: 30,
        nullable: true
    })
    account: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })
    memo: string;

    @OneToMany(type => Procurement, procurement => procurement.vendor)
    public procurement!: Procurement[];
}