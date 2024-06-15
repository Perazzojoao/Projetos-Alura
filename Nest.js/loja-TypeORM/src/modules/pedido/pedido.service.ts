import { Injectable } from '@nestjs/common';
import { PedidoRepository } from './repositories/pedido.ropository';
import { PedidoEntity } from './entities/pedido.entity';

@Injectable()
export class PedidoService implements PedidoRepository{
  create(produto: PedidoEntity): Promise<PedidoEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, produtoAtt: Partial<PedidoEntity>): Promise<PedidoEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<PedidoEntity> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<PedidoEntity | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<PedidoEntity[]> {
    throw new Error('Method not implemented.');
  }
}
