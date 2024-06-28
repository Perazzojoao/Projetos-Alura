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
  UseInterceptors,
} from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { ListaUsuarioDto } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';
import { HashPasswordPipe } from 'src/resources/pipes/hash-password.pipe';
import { HttpResponse } from 'src/lib/http-response';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('/usuarios')
@UseInterceptors(CacheInterceptor)
export class UsuarioController {
  constructor(private UsuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() usuario: CriaUsuarioDto, @Body('senha', HashPasswordPipe) senhaHasheada: string) {
    usuario.senha = senhaHasheada;
    const novoUsuario = await this.UsuarioService.salvar(usuario as UsuarioEntity);
    return new HttpResponse(
      new ListaUsuarioDto(novoUsuario.id, novoUsuario.nome, novoUsuario.email),
      'Usuário criado com sucesso',
    );
  }

  @Get()
  async buscaUsuarios() {
    try {
      const usuariosSalvos = await this.UsuarioService.buscarTodos();
      const usuariosLista = usuariosSalvos.map(
        (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome, usuario.email),
      );
      return usuariosLista;
    } catch (error) {
      throw new HttpException('Algo deu errado', HttpStatus.INTERNAL_SERVER_ERROR, { cause: error });
    }
  }

  @Put(':id')
  async atualizaUsuario(@Param('id') id: string, @Body() usuario: AtualizaUsuarioDto) {
    const usuarioAlvo = await this.UsuarioService.atualiza(id, usuario as UsuarioEntity);
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
    const usuarioADeletar = await this.UsuarioService.deleta(id);
    if (!usuarioADeletar) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return {
      status: HttpStatus.OK,
      mensagem: 'Usuário excluido com sucesso',
    };
  }
}
