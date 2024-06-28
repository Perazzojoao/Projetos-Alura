import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CriaProdutoDto } from './dto/CriaProduto.dto';
import { ProdutoCaracteristicaEntity } from './entities/produto-caracteristicas.entity';
import { ProdutoImagemEntity } from './entities/produto-imagem.entity';
import { ProdutoEntity } from './entities/produto.entity';
import { ProdutoAbstractRepository } from './repositories/produto.abstract.repository';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoAbstractRepository) {}

  async salvar(produto: ProdutoEntity): Promise<ProdutoEntity> {
    const novoProduto = new ProdutoEntity(
      produto.nome,
      produto.valor,
      produto.quantidade,
      produto.descricao,
      produto.categoria,
      produto.caracteristicas.map(
        (caracteristica) => new ProdutoCaracteristicaEntity(caracteristica.nome, caracteristica.descricao),
      ),
      produto.imagens.map((imagem) => new ProdutoImagemEntity(imagem.url, imagem.descricao)),
    );
    return await this.produtoRepository.salvar(novoProduto);
  }

  async buscarTodos(): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.buscarTodos();
  }

  async buscarPorUsuario(usuarioId: string): Promise<ProdutoEntity> {
    const usuario = await this.produtoRepository.buscarPorUsuario(usuarioId);
    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    return usuario;
  }

  async buscarPorId(id: string): Promise<ProdutoEntity> {
    const produto = await this.produtoRepository.buscarPorId(id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  async atualiza(id: string, produtoAtt: Partial<ProdutoEntity>) {
    const produtoAlvo = await this.buscarPorId(id);
    if (!produtoAlvo) {
      throw new NotFoundException('Produto não encontrado');
    }
    Object.assign(produtoAlvo, produtoAtt as ProdutoEntity);

    return await this.produtoRepository.atualiza({ ...produtoAlvo });
  }

  async deleta(id: string): Promise<ProdutoEntity> {
    const produtoAlvo: ProdutoEntity = await this.buscarPorId(id);
    if (!produtoAlvo) {
      throw new NotFoundException('Produto não encontrado');
    }
    return await this.produtoRepository.deleta(produtoAlvo);
  }
}
