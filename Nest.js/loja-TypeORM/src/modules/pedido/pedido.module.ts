import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { PedidoRepository } from './repositories/pedido.ropository';
import { ItensPedidoEntity } from './entities/itens-pedido.entity';
import { ProdutoEntity } from '../produto/entities/produto.entity';
import { PedidoAbstractRepository } from './repositories/pedido.abstract.repository';
import { UsuarioModule } from '../usuario/usuario.module';
import { ProdutoModuleModule } from '../produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoEntity, ItensPedidoEntity]), 
    UsuarioModule, 
    ProdutoModuleModule,
  ],
  controllers: [PedidoController],
  providers: [
    PedidoService,
    {
      provide: PedidoAbstractRepository,
      useClass: PedidoRepository,
    },
  ],
})
export class PedidoModule {}
