import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { ProdutoEntity } from 'src/modules/produto/entities/produto.entity';

@Entity('itens-pedido')
export class ItensPedidoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'preco_venda', nullable: false, type: 'float' })
  precoVenda: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.itensPedido, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  pedido: PedidoEntity;

  @ManyToOne(() => ProdutoEntity, (produto) => produto.itensPedido, {
    cascade: ['update'],
  })
  produto: ProdutoEntity;

  constructor(quantidade: number, precoVenda: number, produto: ProdutoEntity) {
    this.quantidade = quantidade;
    this.precoVenda = precoVenda;
    this.produto = produto;
  }
}
