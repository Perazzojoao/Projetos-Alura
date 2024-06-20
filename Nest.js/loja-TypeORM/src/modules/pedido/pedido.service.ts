import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PedidoRepository } from './repositories/pedido.ropository';
import { PedidoEntity } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { ItensPedidoEntity } from './entities/itens-pedido.entity';
import { ProdutoEntity } from '../produto/entities/produto.entity';

@Injectable()
export class PedidoService implements PedidoRepository {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,

    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,

    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async create(usuarioId: string, produto: CreatePedidoDto): Promise<PedidoEntity | undefined> {
    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
    if (!usuario) {
      throw new Error('Usuário não existe');
    }

    const produtosId = produto.itensPedido.map((item) => item.produtoId);
    const produtos = await this.produtoRepository.findBy({ id: In(produtosId) });

    const itensPedido = produto.itensPedido.map((item) => {
      const produto = produtos.find((produto) => produto.id === item.produtoId);
      if (!produto) {
        throw new NotFoundException('Produto não existe');
      }
      if (produto.quantidade < item.quantidade) {
        throw new BadRequestException(`A quantidade solicitada (${item.quantidade}) é maior que a quantidade em estoque (${produto.quantidade})`);
      }
      produto.quantidade -= item.quantidade;
      return new ItensPedidoEntity(item.quantidade, item.precoVenda, produto);
    });

    const valorTotal = produto.itensPedido.reduce((acc, item) => {
      return acc + item.quantidade * item.precoVenda;
    }, 0);

    const newPedido = new PedidoEntity(valorTotal, produto.status, usuario, itensPedido);
    return await this.pedidoRepository.save(newPedido);
  }

  async update(id: string, produtoAtt: Partial<PedidoEntity>): Promise<PedidoEntity> {
    const pedidoAlvo: { [key: string]: any } | null = await this.pedidoRepository.findOne({
      where: { id },
    });
    if (!pedidoAlvo) {
      throw new HttpException('Pedido não existe', HttpStatus.NOT_FOUND);
    }
    Object.entries(produtoAtt).forEach(([key, value]) => {
      if (key === 'id' || !value) {
        return;
      }
      pedidoAlvo[key] = value;
    });
    return await this.pedidoRepository.save(pedidoAlvo);
  }

  async delete(id: string): Promise<PedidoEntity> {
    const pedidoAlvo = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedidoAlvo) {
      throw new HttpException('Pedido não existe', HttpStatus.NOT_FOUND);
    }
    return await this.pedidoRepository.remove(pedidoAlvo);
  }

  async findOne(id: string): Promise<PedidoEntity | null> {
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }
    return pedido;
  }
  async findAll(): Promise<PedidoEntity[]> {
    return await this.pedidoRepository.find();
  }
}
