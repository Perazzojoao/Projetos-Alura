import { PedidoEntity } from '../entities/pedido.entity';

export abstract class PedidoAbstractRepository {
  abstract create(produto: PedidoEntity): Promise<PedidoEntity>;
  abstract update(produtoAtt: Partial<PedidoEntity>): Promise<PedidoEntity>;
  abstract delete(pedido: PedidoEntity): Promise<PedidoEntity>;
  abstract findOne(id: string): Promise<PedidoEntity | null>;
  abstract findAll(): Promise<PedidoEntity[]>;
}
