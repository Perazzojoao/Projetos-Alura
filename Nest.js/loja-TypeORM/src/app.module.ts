import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './database/postgres-config.service';
import { ConfigModule } from '@nestjs/config';
import { PedidoModule } from './modules/pedido/pedido.module';
import { ProdutoModuleModule } from './modules/produto/produto.module';
import { FiltroDeExcecaoHttp } from './filtros/filtro-de-excecao-http';
import { APP_FILTER } from '@nestjs/core';
@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
    ProdutoModuleModule,
    PedidoModule
  ],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: FiltroDeExcecaoHttp,
  }],
})
export class AppModule {}
