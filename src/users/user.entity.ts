import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    ADMINISTRATOR = "administrator",
    READER = "reader",
    LIBRARIAN = "librarian",
    OFFICER = "officer",
    TECHNICIAN = "technician",
    MERCHANDISER = "merchandiser",
    STOREKEEPER = "storekeeper",
    VENDOR = "vendor",
    GUEST = "guest",
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 254,
        unique: true,
    })
    username: string;

    @Column({
        type: "varchar",
        length: 128,
    })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.GUEST
    })
    role: UserRole;

    @Column({ default: true })
    active: boolean;
}