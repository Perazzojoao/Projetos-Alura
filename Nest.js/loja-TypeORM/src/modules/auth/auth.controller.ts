import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { AuthRepository } from './auth.repository';
import { HttpResponse } from 'src/lib/http-response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthRepository) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() { email, senha }: AuthDTO) {
    const usuario = await this.authService.login(email, senha);

    return new HttpResponse(usuario, 'Usuário logado com sucesso');
  }
}
