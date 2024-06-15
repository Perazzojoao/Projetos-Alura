import { Type } from 'class-transformer';
import {
  IsNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  IsUUID,
  IsUrl,
  ValidateNested,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CriaProdutoDto {
  @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
  @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Valor deve ser um número' })
  @IsNotEmpty({ message: 'Preço é obrigatório' })
  @Min(0.1, { message: 'Preço deve ser maior que 0' })
  valor: number;

  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Quantidade deve ser um número' })
  @IsNotEmpty({ message: 'Quantidade é obrigatória' })
  @Min(1, { message: 'Quantidade deve ser maior que 0' })
  quantidade: number;

  @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  descricao: string;

  @IsNotEmpty({ message: 'Categoria é obrigatória' })
  @MinLength(3, { message: 'Categoria deve ter no mínimo 3 caracteres' })
  @MaxLength(50, { message: 'Categoria deve ter no máximo 50 caracteres' })
  categoria: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1, { message: 'Deve ter no mínimo uma característica' })
  @Type(() => ProdutoCaracteristicaDto)
  caracteristicas: ProdutoCaracteristicaDto[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1, { message: 'Deve ter no mínimo uma imagem' })
  @Type(() => ProdutoImagemDto)
  imagens: ProdutoImagemDto[];
}

class ProdutoCaracteristicaDto {
  @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
  @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  descricao: string;
}

class ProdutoImagemDto {
  @IsNotEmpty({ message: 'URL é obrigatória' })
  @IsUrl({}, { message: 'URL inválida' })
  url: string;

  @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  descricao: string;
}
