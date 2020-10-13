import { ResultType } from "../arrival.entity";

export class CreateArrivalDto {
    bookId: number;
    procurementId: number;
    employeeId: number;
    date: Date;
    quantity?: number;
    result?: ResultType;
    pass?: number;
    refill?: number;
    memo?: string;
}