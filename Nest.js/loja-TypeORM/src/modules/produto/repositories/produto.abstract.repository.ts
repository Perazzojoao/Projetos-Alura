import { CriaProdutoDto } from '../dto/CriaProduto.dto';
import { ProdutoEntity } from '../entities/produto.entity';

export abstract class ProdutoAbstractRepository {
  abstract salvar(produto: ProdutoEntity): Promise<ProdutoEntity>;
  abstract buscarTodos(): Promise<ProdutoEntity[]>;
  abstract buscarPorUsuario(usuarioId: string): Promise<ProdutoEntity | null>;
  abstract buscarPorId(id: string): Promise<ProdutoEntity | null>;
  abstract buscarVariosPorId(ids: string[]): Promise<ProdutoEntity[]>;
  abstract atualiza(produtoAtt: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
  abstract deleta(produto: ProdutoEntity): Promise<ProdutoEntity>;
}
