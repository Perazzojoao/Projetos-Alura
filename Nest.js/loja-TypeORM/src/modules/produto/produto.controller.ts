import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { ProdutoRepository } from './repositories/produto.repository';
import { CriaProdutoDto } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './entities/produto.entity';
import { AtualizaProdutoDto } from './dto/AtualizaProduto.dto';
import { ProdutoImagemEntity } from './entities/produto-imagem.entity'; // Import the missing entity
import { ProdutoCaracteristicaEntity } from './entities/produto-caracteristicas.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() produto: CriaProdutoDto) {
    const novoProduto = new ProdutoEntity(
      produto.usuarioId,
      produto.nome,
      produto.valor,
      produto.quantidade,
      produto.descricao,
      produto.categoria,
      produto.caracteristicas.map(
        (caracteristica) =>
          new ProdutoCaracteristicaEntity(
            caracteristica.nome,
            caracteristica.descricao,
          ),
      ),
      produto.imagens.map(
        (imagem) => new ProdutoImagemEntity(imagem.url, imagem.descricao),
      ),
    );
    return await this.produtoRepository.salvar(novoProduto);
  }

  @Get()
  async buscarTodos() {
    return await this.produtoRepository.buscarTodos();
  }

  @Put(':id')
  async atualizaProduto(
    @Body() produto: Partial<AtualizaProdutoDto>,
    id: string,
  ) {
    const produtoAtt = await this.produtoRepository.atualiza(id, produto);
    return {
      message: 'Produto atualizado com sucesso',
      produto: produtoAtt,
    };
  }

  @Delete(':id')
  async deletaProduto(id: string) {
    await this.produtoRepository.deleta(id);
    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
