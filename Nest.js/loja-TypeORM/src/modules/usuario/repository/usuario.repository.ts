import { UsuarioEntity } from "../interfaces/usuario.entity";

export abstract class UsuarioRepository {
  abstract salvar(usuario: UsuarioEntity): Promise<UsuarioEntity>;
  abstract buscarTodos(): Promise<UsuarioEntity[]>;
  abstract buscarPorEmail(email: string): Promise<boolean>;
  abstract buscarPorId(id: number): Promise<UsuarioEntity | null>;
  abstract atualiza(id: number, usuarioAtt: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
  abstract deleta(id: number): Promise<UsuarioEntity>;
}