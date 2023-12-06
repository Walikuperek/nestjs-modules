import {Injectable} from '@nestjs/common';
import * as crypto from 'crypto';

export type User = {
    id: string;
    username: string;
    passwordHash: string;
    email: string;
    isActive: boolean;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: crypto.randomUUID(),
            username: 'john',
            passwordHash: 'eyFAKE.AdALKDJLSQ@JLKJ!l1kj3mnDALS',
            email: 'john@email.com',
            isActive: false
        },
        {
            id: crypto.randomUUID(),
            username: 'jane',
            passwordHash: 'eyFAKE.AdALKDJLSQ@JLKJ!l1kj3mnDALS',
            email: 'jane@email.com',
            isActive: false
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async create(
        username: string,
        password: string,
        email: string
    ): Promise<User> {
        const user: User = {
            id: crypto.randomUUID(),
            username,
            passwordHash: password,
            email: email,
            isActive: false
        };
        this.users.push(user);
        return user;
    }

    async activate(email: string): Promise<boolean> {
        const user = this.users.find(user => user.email === email);
        if (user) {
            user.isActive = true;
            return true;
        }
        return false;
    }
}
