import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [],
})
export class ProdutoModuleModule {}
