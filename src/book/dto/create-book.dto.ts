import { SpeciesType, StateType } from "../book.entity";

export class CreateBookDto {
    name: string;
    type?: string;
    author: string;
    press?: string;
    publication?: Date;
    isbn: string;
    quantity?: number;
    img?: string;
    intro?: string;
    date?: Date;
    state?: StateType;
    language?: string;
    price?: number;
    species?: SpeciesType;
    geography?: string;
    warehouseDate: Date;
    warehouseQuantity?: number;
    memo?: string;
}