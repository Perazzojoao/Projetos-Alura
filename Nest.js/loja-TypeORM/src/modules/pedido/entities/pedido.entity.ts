import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { StatusPedido } from '../enum/statusPedidi.enum';
import { UsuarioEntity } from '../../usuario/entities/usuario.entity';
import { ItensPedidoEntity } from './itens-pedido.entity';

@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'valor_total', type: 'float',  nullable: false })
  valor_total: number;

  @Column({ name: 'status', enum: StatusPedido, nullable: false })
  status: StatusPedido;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.pedidos)
  usuario: UsuarioEntity;

  @OneToMany(() => ItensPedidoEntity, (itemPedido) => itemPedido.pedido, {
    cascade: true,
  })
  itensPedido: ItensPedidoEntity[];

  [key: string]: any;

  constructor(valor_total: number, status: StatusPedido, usuario: UsuarioEntity, itensPedido: ItensPedidoEntity[]) {
    this.valor_total = valor_total;
    this.status = status;
    this.usuario = usuario;
    this.itensPedido = itensPedido;
  }
}
