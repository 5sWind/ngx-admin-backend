import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john@example.mis.com',
                password: 'changeme',
                role: 'administrator',
            },
            {
                userId: 2,
                username: 'chris@example.mis.com',
                password: 'secret',
                role: 'guest',
            },
            {
                userId: 3,
                username: 'maria@example.mis.com',
                password: 'guess',
                role: 'reader',
            },
            {
                userId: 4,
                username: 'hans@example.mis.com',
                password: 'devote',
                role: 'librarian',
            },
            {
                userId: 5,
                username: 'alice@example.mis.com',
                password: 'kitchen',
                role: 'officer',
            },
            {
                userId: 6,
                username: 'morse@example.mis.com',
                password: 'pivot',
                role: 'technician',
            },
            {
                userId: 7,
                username: 'kennedy@example.mis.com',
                password: 'forgetme',
                role: 'merchandiser',
            },
            {
                userId: 8,
                username: 'nice@example.mis.com',
                password: 'expose',
                role: 'storekeeper',
            },
            {
                userId: 9,
                username: 'adam@example.mis.com',
                password: 'madeus',
                role: 'vendor',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}