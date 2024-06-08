import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './interfaces/usuario.entity';
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
      return error;
    }
  }

  @Get()
  async buscaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.buscarTodos();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  @Put(':id')
  async atualizaUsuario(
    @Param('id') id: number,
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
  async deletaUsuario(@Param('id') id: number) {
    const usuarioADeletar = await this.usuarioRepository.deleta(id);
    if (!usuarioADeletar) {
      return {
        status: HttpStatus.NOT_FOUND,
        mensagem: 'Usuário não encontrado',
      };
    }
    return {
      status: HttpStatus.OK,
      mensagem: 'Usuário excluido com sucesso',
    };
  }
}
