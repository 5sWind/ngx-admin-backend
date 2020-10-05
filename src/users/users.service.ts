import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john@gmail.com',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris@gmail.com',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria@gmail.com',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}