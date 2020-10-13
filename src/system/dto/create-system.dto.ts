export class CreateSystemDto {
    departmentId: number;
    name: string;
    location?: string;
    source?: string;
    memo?: string;
}