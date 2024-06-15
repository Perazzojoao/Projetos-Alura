import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { PedidoEntity } from './pedido.entity';

@Entity('itens-pedido')
export class ItensPedidoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'preco_venda', nullable: false })
  precoVenda: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.itensPedido, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  pedido: PedidoEntity;

  // constructor(quantidade: number, precoVenda: number, pedido: PedidoEntity) {
  //   this.quantidade = quantidade;
  //   this.precoVenda = precoVenda;
  //   this.pedido = pedido;
  // }
}
