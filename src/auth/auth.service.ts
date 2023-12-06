import bcrypt from 'bcrypt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async logIn(
        username: string,
        password: string
    ): Promise<{access_token: string}> {
        const user = await this.usersService.findOne(username);
        const match = await bcrypt.compare(password, user.passwordHash);

        if (!match) {
            throw new UnauthorizedException();
        }

        const payload = {sub: user.id, username: user.username};
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
