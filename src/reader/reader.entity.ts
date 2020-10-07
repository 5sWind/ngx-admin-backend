
import { Lending } from 'src/lending/lending.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum ReaderType {
    INTERNAL = 'I',
    EXTERNAL = 'E'
}
@Entity()
export class Reader {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 12,
        unique: true,
    })
    cardno: string;

    @Column({
        type: "enum",
        enum: ReaderType,
        nullable: true,
    })
    type: ReaderType;

    @Column({
        type: "date",
        nullable: true
    })
    expiration: Date;

    @Column({
        type: "varchar",
        length: 100,
    })
    name: string;

    @Column({
        type: "int",
        length: 18,
        unique: true
    })
    idno: number;

    @Column({
        type: "int",
        length: 15,
        nullable: true,
        unique: true
    })
    phone: number;
    
    @Column({
        type: "varchar",
        length: 254,
        nullable: true,
        unique: true
    })
    email: string;

    @Column({
        type: "date",
        nullable: true
    })
    register: Date;

    @Column({
        type: "date",
        nullable: true
    })
    cancel: Date;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    memo: string;

    @OneToMany(type => Lending, lending => lending.reader)
    public lending!: Lending[];
}