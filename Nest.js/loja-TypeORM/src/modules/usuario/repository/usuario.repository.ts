import { CriaUsuarioDto } from "../dto/CriaUsuario.dto";
import { UsuarioEntity } from "../entities/usuario.entity";

export abstract class UsuarioRepository {
  abstract salvar(usuario: CriaUsuarioDto): Promise<UsuarioEntity>;
  abstract buscarTodos(): Promise<UsuarioEntity[]>;
  abstract buscarPorEmail(email: string): Promise<boolean>;
  abstract buscarPorId(id: string): Promise<UsuarioEntity | null>;
  abstract atualiza(id: string, usuarioAtt: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
  abstract deleta(id: string): Promise<UsuarioEntity>;
}