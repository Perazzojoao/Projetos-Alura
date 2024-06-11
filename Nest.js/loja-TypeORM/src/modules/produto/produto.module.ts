import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './repositories/produto.repository';
import { ProdutoService } from './services/produto.service';
import { ProdutoEntity } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutoController],
  providers: [
    {
      provide: ProdutoRepository,
      useClass: ProdutoService,
    },
  ],
})
export class ProdutoModuleModule {}
