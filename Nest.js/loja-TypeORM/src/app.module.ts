import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './database/postgres-config.service';
import { ConfigModule } from '@nestjs/config';
import { PedidoModule } from './modules/pedido/pedido.module';
import { ProdutoModuleModule } from './modules/produto/produto.module';
import { FiltroDeExcecaoGlobal } from './resources/filters/filtro-de-excecao-global';
import { APP_FILTER } from '@nestjs/core';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    ProdutoModuleModule,
    PedidoModule,
    AuthModule,
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({ ttl: 10 * 1000 }),
      }),
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoGlobal,
    },
  ],
})
export class AppModule {}
