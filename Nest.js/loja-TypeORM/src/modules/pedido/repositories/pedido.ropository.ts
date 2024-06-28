import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/modules/produto/entities/produto.entity';
import { UsuarioEntity } from 'src/modules/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { PedidoEntity } from '../entities/pedido.entity';
import { PedidoAbstractRepository } from './pedido.abstract.repository';

export class PedidoRepository implements PedidoAbstractRepository {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,
  ) {}

  async create(pedido: PedidoEntity): Promise<PedidoEntity> {
    return await this.pedidoRepository.save(pedido);
  }
  async update(pedido: Partial<PedidoEntity>): Promise<PedidoEntity> {
    return await this.pedidoRepository.save(pedido);
  }
  async delete(pedido: PedidoEntity): Promise<PedidoEntity> {
    return await this.pedidoRepository.remove(pedido);
  }
  async findOne(id: string): Promise<PedidoEntity | null> {
    return await this.pedidoRepository.findOne({ where: { id } });
  }
  async findAll(): Promise<PedidoEntity[]> {
    return await this.pedidoRepository.find();
  }
}
