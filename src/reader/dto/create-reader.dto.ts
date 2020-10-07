import { ReaderType } from "../reader.entity";

export class CreateReaderDto {
    cardno: string;
    type?: ReaderType;
    expiration?: Date;
    name: string;
    idno: number;
    phone?: number;
    email?: string;
    register?: Date;
    cancel?: Date;
    memo?: string;
}