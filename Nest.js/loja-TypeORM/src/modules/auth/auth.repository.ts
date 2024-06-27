import { ListaUsuarioDto } from "../usuario/dto/ListaUsuario.dto";

export abstract class AuthRepository {
  abstract login(email: string, senha: string): Promise<ListaUsuarioDto>;
}