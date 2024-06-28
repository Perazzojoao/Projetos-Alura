import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ExibeUsuarioDto } from './dto/ExibeUsuarioDto';
import { AuthRepository } from './repositories/auth.repository';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService implements AuthRepository {
  constructor(private readonly usuarioService: UsuarioService) {}

  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.buscarPorEmail(email);

    const athenticated = await bcrypt.compare(senha, usuario.senha);
    if (!athenticated) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }
    
    return new ExibeUsuarioDto(usuario.id, usuario.nome, usuario.email)
  }
}
