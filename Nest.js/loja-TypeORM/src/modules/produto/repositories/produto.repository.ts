import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ProdutoEntity } from '../entities/produto.entity';
import { ProdutoAbstractRepository } from './produto.abstract.repository';

export class ProdutoRepository implements ProdutoAbstractRepository {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async salvar(produto: ProdutoEntity): Promise<ProdutoEntity> {
    return await this.produtoRepository.save(produto);
  }
  async buscarTodos(): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find();
  }
  async buscarPorUsuario(usuarioId: string): Promise<ProdutoEntity | null> {
    return await this.produtoRepository.findOne({ where: { id: usuarioId } });
  }
  async buscarPorId(id: string): Promise<ProdutoEntity | null> {
    return await this.produtoRepository.findOne({ where: { id } });
  }
  async buscarVariosPorId(ids: string[]): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.findBy({ id: In(ids) })
  }
  async atualiza(produtoAtt: Partial<ProdutoEntity>): Promise<ProdutoEntity> {
    return await this.produtoRepository.save({ ...produtoAtt });
  }
  async deleta(produto: ProdutoEntity): Promise<ProdutoEntity> {
    return await this.produtoRepository.remove(produto);
  }
}
