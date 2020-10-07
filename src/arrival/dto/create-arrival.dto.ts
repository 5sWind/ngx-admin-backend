import { ResultType } from "../arrival.entity";

export class CreateArrivalDto {
    date: Date;
    quantity?: number;
    result?: ResultType;
    pass?: number;
    refill?: number;
    memo?: string;
}