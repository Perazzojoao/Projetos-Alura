import { CriaUsuarioDto } from "../dto/CriaUsuario.dto";
import { UsuarioEntity } from "../entities/usuario.entity";

export abstract class UsuarioAbstractRepository {
  abstract salvar(usuario: CriaUsuarioDto): Promise<UsuarioEntity>;
  abstract buscarTodos(): Promise<UsuarioEntity[]>;
  abstract buscarPorEmail(email: string): Promise<UsuarioEntity | null>;
  abstract buscarPorId(id: string): Promise<UsuarioEntity | null>;
  abstract atualiza(usuarioAtt: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
  abstract deleta(usuarioAlvo: UsuarioEntity): Promise<UsuarioEntity>;
}