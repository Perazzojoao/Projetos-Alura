import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { PedidoRepository } from './repositories/pedido.ropository';
import { ItensPedidoEntity } from './entities/itens-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity, UsuarioEntity, ItensPedidoEntity])],
  controllers: [PedidoController],
  providers: [
    {
      provide: PedidoRepository,
      useClass: PedidoService,
    },
  ],
})
export class PedidoModule {}
