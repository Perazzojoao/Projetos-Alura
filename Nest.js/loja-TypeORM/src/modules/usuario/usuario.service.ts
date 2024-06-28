import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioEntity } from './entities/usuario.entity';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioInterfaceRepository } from './repository/usuario.interface.repository';
@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioInterfaceRepository) {}

  async salvar(usuario: UsuarioEntity) {
    return await this.usuarioRepository.salvar(usuario);
  }

  async buscarTodos() {
    return await this.usuarioRepository.buscarTodos();
  }

  async buscarPorEmail(email: string) {
    const usuario = await this.usuarioRepository.buscarPorEmail(email);

    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  async buscarPorId(id: string) {
    const usuario = await this.usuarioRepository.buscarPorId(id);
    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    return usuario;
  }

  async atualiza(id: string, usuarioAtt: Partial<UsuarioEntity>) {
    const usuarioAlvo = await this.buscarPorId(id);
    if (!usuarioAlvo) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    Object.assign(usuarioAlvo, usuarioAtt as UsuarioEntity);

    return await this.usuarioRepository.atualiza({ ...usuarioAlvo });
  }

  async deleta(id: string) {
    const usuarioAlvo = await this.buscarPorId(id);
    if (!usuarioAlvo) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return await this.usuarioRepository.deleta(usuarioAlvo);
  }
}
