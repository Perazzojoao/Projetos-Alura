import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriaUsuarioDto } from '../dto/CriaUsuario.dto';
@Injectable()
export class UsuarioRepositoryService implements UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async salvar(usuario: CriaUsuarioDto) {
    try {
      const novoUsuario = new UsuarioEntity(
        usuario.nome,
        usuario.email,
        usuario.senha,
      );
      
      return await this.usuarioRepository.save(novoUsuario);
    } catch (error) {
      throw new Error('Erro ao salvar usuário');
    }
  }

  async buscarTodos() {
    try {
      return await this.usuarioRepository.find();
    } catch (error) {
      throw new Error('Erro ao buscar usuários');
    }
  }

  async buscarPorEmail(email: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    return usuario ? true : false;
  }

  async buscarPorId(id: string) {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  async atualiza(id: string, usuarioAtt: Partial<UsuarioEntity>) {
    const usuarioAlvo: { [key: string]: string } | null =
      await this.buscarPorId(id);
    if (!usuarioAlvo) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    Object.entries(usuarioAtt).forEach(([chave, valor]) => {
      if (chave === 'id' || !valor) {
        return;
      }

      usuarioAlvo[chave] = valor;
    });

    return await this.usuarioRepository.save({ ...usuarioAlvo });
  }

  async deleta(id: string) {
    try {
      const usuarioAlvo = await this.buscarPorId(id);
      if (!usuarioAlvo) {
        throw new Error('Usuário não encontrado');
      }
      return await this.usuarioRepository.remove(usuarioAlvo);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
