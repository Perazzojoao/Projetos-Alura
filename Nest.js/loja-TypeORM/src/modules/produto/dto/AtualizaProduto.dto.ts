import { PartialType } from '@nestjs/mapped-types';
import { CriaProdutoDto } from './CriaProduto.dto';

export class AtualizaProdutoDto extends PartialType(CriaProdutoDto) {}
