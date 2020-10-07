import { EducationType, GenderType } from "../employee.entity";

export class CreateEmployeeDto {
    name: string;
    gender?: GenderType;
    birthday?: Date;
    education?: EducationType;
    title: string;
    phone?: string;
    email?: string;
    contract?: Date;
    enrollment: Date;
    resign?: Date;
    memo?: string;
}