import { PedidoEntity } from '../entities/pedido.entity';

export abstract class PedidoRepository {
  abstract create(produto: PedidoEntity): Promise<PedidoEntity>;
  abstract update(
    id: string,
    produtoAtt: Partial<PedidoEntity>,
  ): Promise<PedidoEntity>;
  abstract delete(id: string): Promise<PedidoEntity>;
  abstract findOne(id: string): Promise<PedidoEntity | null>;
  abstract findAll(): Promise<PedidoEntity[]>;
}
