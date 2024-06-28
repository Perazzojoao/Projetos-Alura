import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CriaUsuarioDto } from "../dto/CriaUsuario.dto";
import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioAbstractRepository } from "./usuario.abstract.repository";

export class UsuarioRepository implements UsuarioAbstractRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async salvar(usuario: CriaUsuarioDto): Promise<UsuarioEntity> {
    const novoUsuario = new UsuarioEntity(usuario.nome, usuario.email, usuario.senha);
    return await this.usuarioRepository.save(novoUsuario);
  }
  async buscarTodos(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }
  async buscarPorEmail(email: string): Promise<UsuarioEntity | null> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }
  async buscarPorId(id: string): Promise<UsuarioEntity | null> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }
  async atualiza(usuarioAtt: Partial<UsuarioEntity>): Promise<UsuarioEntity> {
    return await this.usuarioRepository.save({ ...usuarioAtt });
  }
  async deleta(usuarioAlvo: UsuarioEntity): Promise<UsuarioEntity> {
    return await this.usuarioRepository.remove(usuarioAlvo);
  }
  
}