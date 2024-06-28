import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './repositories/produto.repository';
import { ProdutoService } from './produto.service';
import { ProdutoEntity } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoAbstractRepository } from './repositories/produto.abstract.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    {
      provide: ProdutoAbstractRepository,
      useClass: ProdutoRepository,
    },
  ],
  exports: [ProdutoAbstractRepository]
})
export class ProdutoModuleModule {}
