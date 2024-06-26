import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PedidoEntity } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ItensPedidoEntity } from './entities/itens-pedido.entity';
import { PedidoAbstractRepository } from './repositories/pedido.abstract.repository';
import { UsuarioAbstractRepository } from '../usuario/repository/usuario.abstract.repository';
import { ProdutoAbstractRepository } from '../produto/repositories/produto.abstract.repository';

@Injectable()
export class PedidoService {
  constructor(
    private readonly pedidoRepository: PedidoAbstractRepository,
    private readonly usuarioRepository: UsuarioAbstractRepository,
    private readonly produtoRepository: ProdutoAbstractRepository,
  ) {}

  async create(usuarioId: string, produto: CreatePedidoDto): Promise<PedidoEntity | undefined> {
    const usuario = await this.usuarioRepository.buscarPorId(usuarioId);
    if (!usuario) {
      throw new NotFoundException('Usuário não existe');
    }

    const produtosId = produto.itensPedido.map((item) => item.produtoId);
    const produtos = await this.produtoRepository.buscarVariosPorId(produtosId);

    const itensPedido = produto.itensPedido.map((item) => {
      const produto = produtos.find((produto) => produto.id === item.produtoId);
      if (!produto) {
        throw new NotFoundException('Produto não existe');
      }
      if (produto.quantidade < item.quantidade) {
        throw new BadRequestException(
          `A quantidade solicitada (${item.quantidade}) é maior que a quantidade em estoque (${produto.quantidade})`,
        );
      }
      produto.quantidade -= item.quantidade;
      return new ItensPedidoEntity(item.quantidade, item.precoVenda, produto);
    });

    const valorTotal = produto.itensPedido.reduce((acc, item) => {
      return acc + item.quantidade * item.precoVenda;
    }, 0);

    const newPedido = new PedidoEntity(valorTotal, produto.status, usuario, itensPedido);
    return await this.pedidoRepository.create(newPedido);
  }

  async update(
    pedidoId: string,
    produtoAtt: Partial<PedidoEntity>,
    usuarioId: string,
  ): Promise<PedidoEntity> {
    const pedidoAlvo = await this.pedidoRepository.findOne(pedidoId);
    if (!pedidoAlvo) {
      throw new HttpException('Pedido não existe', HttpStatus.NOT_FOUND);
    }
    if (pedidoAlvo.usuario.id !== usuarioId) {
      throw new ForbiddenException('Você não tem autorização para atualizar esse pedido');
    }
    Object.assign(pedidoAlvo, produtoAtt as PedidoEntity);
    return await this.pedidoRepository.update(pedidoAlvo);
  }

  async delete(pedidoId: string, usuarioId: string): Promise<PedidoEntity> {
    const pedidoAlvo = await this.pedidoRepository.findOne(pedidoId);
    if (!pedidoAlvo) {
      throw new HttpException('Pedido não existe', HttpStatus.NOT_FOUND);
    }
    if (pedidoAlvo.usuario.id !== usuarioId) {
      throw new ForbiddenException('Você não tem autorização para atualizar esse pedido');
    }
    return await this.pedidoRepository.delete(pedidoAlvo);
  }

  async findOne(pedidoId: string, usuarioId: string): Promise<PedidoEntity> {
    const pedido = await this.pedidoRepository.findOne(pedidoId);
    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }
    if (pedido.usuario.id !== usuarioId) {
      throw new ForbiddenException('Você não tem autorização para atualizar esse pedido');
    }
    return pedido;
  }
  async findAll(): Promise<PedidoEntity[]> {
    return await this.pedidoRepository.findAll();
  }
}
