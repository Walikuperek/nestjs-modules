import {Body, Controller, Post, HttpCode, HttpStatus} from '@nestjs/common';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    logIn(@Body() dto: Record<string, string>) {
        return this.authService.logIn(dto.username, dto.password);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    register(@Body() dto: Record<string, string>) {
        return this.authService.register(dto.username, dto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('activate')
    activate(@Body() dto: Record<string, string>) {
        return this.authService.activate(dto.email);
    }
}
