import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { PedidoEntity } from '../entities/pedido.entity';

export abstract class PedidoRepository {
  abstract create(usuarioId: string, produto: CreatePedidoDto): Promise<PedidoEntity | undefined>;
  abstract update(id: string, produtoAtt: Partial<PedidoEntity>): Promise<PedidoEntity>;
  abstract delete(id: string): Promise<PedidoEntity>;
  abstract findOne(id: string): Promise<PedidoEntity | null>;
  abstract findAll(): Promise<PedidoEntity[]>;
}
