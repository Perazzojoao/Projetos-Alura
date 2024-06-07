import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDto } from "./dto/CriaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() usuario: CriaUsuarioDto){
    this.usuarioRepository.salvar(usuario);
    return usuario;
  }

  @Get()
  async buscaUsuarios(){
    return this.usuarioRepository.buscarTodos();
  }
}