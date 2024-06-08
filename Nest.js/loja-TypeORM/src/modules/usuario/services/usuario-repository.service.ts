import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../interfaces/usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsuarioRepositoryService implements UsuarioRepository {
  constructor(private prisma: PrismaService) {}

  async salvar(usuario: UsuarioEntity) {
    try {
      const novoUsuario = await this.prisma.usuario.create({
        data: {
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
        },
      });
      return novoUsuario;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          'Erro ao salvar usuário',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        throw new HttpException(
          'Erro inesperado ao salvar usuário',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async buscarTodos() {
    return await this.prisma.usuario.findMany();
  }

  async buscarPorEmail(email: string) {
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    return usuario ? true : false;
  }

  async buscarPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    return usuario;
  }

  async atualiza(id: number, usuarioAtt: Partial<UsuarioEntity>) {
    const usuarioAlvo: { [key: string]: string | number } | null =
      await this.buscarPorId(id);
    if (!usuarioAlvo) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    Object.entries(usuarioAtt).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuarioAlvo[chave] = valor;
    });

    return await this.prisma.usuario.update({
      where: { id },
      data: usuarioAlvo,
    });
  }

  async deleta(id: number) {
    const usuarioAlvo = await this.buscarPorId(id);
    if (!usuarioAlvo) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.usuario.delete({ where: { id } });
  }
}
