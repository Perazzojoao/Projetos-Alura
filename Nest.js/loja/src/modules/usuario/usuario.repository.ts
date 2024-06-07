import { Injectable } from "@nestjs/common";
import { CriaUsuarioDto } from "./dto/CriaUsuario.dto";

@Injectable()
export class UsuarioRepository {
  private usuarios = <CriaUsuarioDto[]>[];

  async salvar(usuario: any) {
    this.usuarios.push(usuario);
  }

  async buscarTodos() {
    return this.usuarios;
  }

  async buscarPorEmail(email: string) {
    const usuario = this.usuarios.find((usuario: CriaUsuarioDto) => usuario.email === email);
    return usuario ? true : false;
  }
}