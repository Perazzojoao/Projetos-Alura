import { Controller, Post, Body, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { HttpResponse } from 'src/lib/http-response';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() { email, senha }: AuthDTO) {
    const usuario = await this.authService.login(email, senha);

    return new HttpResponse(usuario, 'Usuário logado com sucesso');
  }
}
