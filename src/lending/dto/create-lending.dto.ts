export class CreateLendingDto {
    bookId: number;
    readerId: number;
    employeeId: number;
    date: Date;
    return?: Date;
    memo?: string;
}