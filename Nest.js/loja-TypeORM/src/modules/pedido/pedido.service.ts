import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PedidoRepository } from './repositories/pedido.ropository';
import { PedidoEntity } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { ItensPedidoEntity } from './entities/itens-pedido.entity';

@Injectable()
export class PedidoService implements PedidoRepository {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,

    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(usuarioId: string, produto: CreatePedidoDto): Promise<PedidoEntity | undefined> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
      if (!usuario) {
        throw new Error('Usuário não existe');
      }
      const itensPedido = produto.itensPedido.map(
        (item) => new ItensPedidoEntity(item.quantidade, item.precoVenda),
      );
      const valorTotal = produto.itensPedido.reduce((acc, item) => {
        return acc + item.quantidade * item.precoVenda;
      }, 0);
      const newPedido = new PedidoEntity(valorTotal, produto.status, usuario, itensPedido);
      return await this.pedidoRepository.save(newPedido);
    } catch (error) {
      throw new HttpException(error.message || 'Erro ao salvar usuário', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, produtoAtt: Partial<PedidoEntity>): Promise<PedidoEntity> {
    const pedidoAlvo: { [key: string]: string | number } | null = await this.pedidoRepository.findOne({
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
