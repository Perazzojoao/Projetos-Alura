import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './entitys/usuario.entity';
import { ListaUsuarioDto } from './dto/ListaUsuario.sto';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() usuario: CriaUsuarioDto) {
    try {
      const usuarioEntity = new UsuarioEntity(
        usuario.nome,
        usuario.email,
        usuario.senha,
      );

      return await this.usuarioRepository.salvar(usuarioEntity);
    } catch (error) {
      throw new HttpException(
        'Algo deu errado',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get()
  async buscaUsuarios() {
    try {
      const usuariosSalvos = await this.usuarioRepository.buscarTodos();
      const usuariosLista = usuariosSalvos.map(
        (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome),
      );
      return usuariosLista;
    } catch (error) {
      throw new HttpException(
        'Algo deu errado',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Put(':id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() usuario: AtualizaUsuarioDto,
  ) {
    const usuarioAlvo = await this.usuarioRepository.atualiza(id, usuario);
    if (!usuarioAlvo) {
      return {
        status: HttpStatus.NOT_FOUND,
        mensagem: 'Usuário não encontrado',
      };
    }
    return {
      status: HttpStatus.OK,
      mensagem: 'Usuário atualizado com sucesso',
      usuario: usuarioAlvo,
    };
  }

  @Delete(':id')
  async deletaUsuario(@Param('id') id: string) {
    const usuarioADeletar = await this.usuarioRepository.deleta(id);
    if (!usuarioADeletar) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return {
      status: HttpStatus.OK,
      mensagem: 'Usuário excluido com sucesso',
    };
  }
}
