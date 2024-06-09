import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'id', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'valor', length: 100, nullable: false })
  descricao: string;
}
