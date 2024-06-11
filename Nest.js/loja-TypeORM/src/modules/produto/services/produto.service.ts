import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProdutoEntity } from '../entities/produto.entity';
import { ProdutoRepository } from '../repositories/produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoCaracteristicaEntity } from '../entities/produto-caracteristicas.entity';
import { ProdutoImagemEntity } from '../entities/produto-imagem.entity';

@Injectable()
export class ProdutoService implements ProdutoRepository {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async salvar(produto: ProdutoEntity): Promise<ProdutoEntity> {
    try {
      const novoProduto = await this.produtoRepository.save(produto);
      return novoProduto;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  async buscarTodos(): Promise<ProdutoEntity[]> {
    try {
      return await this.produtoRepository.find();
    } catch (error) {
      throw new Error('Erro ao buscar produtos');
    }
  }
  async buscarPorUsuario(usuarioId: string): Promise<ProdutoEntity[]> {
    try {
      return await this.produtoRepository.find({ where: { usuarioId } });
    } catch (error) {
      throw new Error('Erro ao buscar produtos');
    }
  }
  async buscarPorId(id: string): Promise<ProdutoEntity | null> {
    return await this.produtoRepository.findOne({ where: { id } });
  }
  async atualiza(id: string, produtoAtt: Partial<ProdutoEntity>) {
    const produtoAlvo: {
      [key: string]:
        | string
        | number
        | ProdutoCaracteristicaEntity[]
        | ProdutoImagemEntity[]
        | undefined;
    } | null = await this.buscarPorId(id);
    if (!produtoAlvo) {
      throw new Error('Produto não encontrado');
    }
    Object.entries(produtoAtt).forEach(([chave, valor]) => {
      if (chave === 'id' || !valor) {
        return;
      }
      produtoAlvo[chave] = valor;
    });

    return await this.produtoRepository.save({ ...produtoAlvo });
  }
  async deleta(id: string): Promise<ProdutoEntity> {
    const produtoAlvo: ProdutoEntity | null = await this.buscarPorId(id);
    if (!produtoAlvo) {
      throw new Error('Produto não encontrado');
    }
    return await this.produtoRepository.remove(produtoAlvo);
  }
}
