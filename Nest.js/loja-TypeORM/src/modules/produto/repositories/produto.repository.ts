import { ProdutoEntity } from "../entities/produto.entity";

export abstract class ProdutoRepository {
  abstract salvar(produto: ProdutoEntity): Promise<ProdutoEntity>;
  abstract buscarTodos(): Promise<ProdutoEntity[]>;
  abstract buscarPorUsuario(usuarioId: string): Promise<ProdutoEntity[]>;
  abstract buscarPorId(id: string): Promise<ProdutoEntity | null>;
  abstract atualiza(id: string, produtoAtt: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
  abstract deleta(id: string): Promise<ProdutoEntity>;
}