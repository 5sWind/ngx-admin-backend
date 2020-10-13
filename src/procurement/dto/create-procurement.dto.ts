import { StateType } from "../procurement.entity";

export class CreateProcurementDto {
    bookId: number;
    vendorId: number;
    employeeId: number;
    date: Date;
    quantity?: number;
    price?: number;
    state: StateType;
    memo?: string;
}