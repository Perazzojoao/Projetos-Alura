import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
import { UsuarioRepository } from '../usuario/repository/usuario.repository';
import { ExibeUsuarioDto } from './dto/ExibeUsuarioDto';

@Injectable()
export class AuthService implements AuthRepository {
  constructor(private readonly usuarioService: UsuarioRepository) {}

  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.buscarPorEmail(email);

    const athenticated = await bcrypt.compare(senha, usuario.senha);
    if (!athenticated) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }
    
    return new ExibeUsuarioDto(usuario.id, usuario.nome, usuario.email)
  }
}
