import { StateType } from "../procurement.entity";

export class CreateProcurementDto {
    date: Date;
    quantity?: number;
    price?: number;
    state: StateType;
    memo?: string;
}