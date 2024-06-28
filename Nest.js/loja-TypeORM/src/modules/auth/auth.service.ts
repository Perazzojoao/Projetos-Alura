import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ExibeUsuarioDto } from './dto/ExibeUsuarioDto';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

export interface UsuarioPayload {
  sub: string;
  nomeUsuario: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.buscarPorEmail(email);

    const athenticated = await bcrypt.compare(senha, usuario.senha);
    if (!athenticated) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }

    const payload: UsuarioPayload = {
      sub: usuario.id,
      nomeUsuario: usuario.nome,
    };

    return {
      token: this.jwtService.sign(payload),
      usuario: new ExibeUsuarioDto(usuario.id, usuario.nome, usuario.email),
    };
  }
}
