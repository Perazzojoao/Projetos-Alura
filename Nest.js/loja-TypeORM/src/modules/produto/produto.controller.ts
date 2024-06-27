import { Controller, Post, Body, Get, Put, Delete, UseInterceptors, Param, Inject } from '@nestjs/common';
import { ProdutoRepository } from './repositories/produto.repository';
import { CriaProdutoDto } from './dto/CriaProduto.dto';
import { AtualizaProdutoDto } from './dto/AtualizaProduto.dto';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ProdutoEntity } from './entities/produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(
    private produtoRepository: ProdutoRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post()
  async criaProduto(@Body() produto: CriaProdutoDto) {
    const novoProduto = await this.produtoRepository.salvar(produto);
    return {
      message: 'Produto criado com sucesso',
      produto: novoProduto,
    };
  }

  @Get()
  async buscarTodos() {
    let produtos = await this.cacheManager.get<ProdutoEntity[]>('produtos')

    if (!produtos) {
      produtos = await this.produtoRepository.buscarTodos();
      await this.cacheManager.set('produtos', produtos, 10 * 1000);
    }

    return {
      message: 'Produtos encontrados com sucesso',
      data: produtos,
    }
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    let produto = await this.cacheManager.get<ProdutoEntity | null>(`produto-${id}`)

    if (!produto) {
      produto = await this.produtoRepository.buscarPorId(id);
      await this.cacheManager.set(`produto-${id}`, produto, 10 * 1000);
    }
    
    return {
      message: 'Produto encontrado com sucesso',
      data: produto,
    };
  }

  @Put(':id')
  async atualizaProduto(@Body() produto: Partial<AtualizaProdutoDto>, @Param('id') id: string) {
    const produtoAtt = await this.produtoRepository.atualiza(id, produto);
    return {
      message: 'Produto atualizado com sucesso',
      produto: produtoAtt,
    };
  }

  @Delete(':id')
  async deletaProduto(@Param('id') id: string) {
    await this.produtoRepository.deleta(id);
    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
