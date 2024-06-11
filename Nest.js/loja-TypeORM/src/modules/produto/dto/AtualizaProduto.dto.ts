import {
  IsNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class AtualizaProdutoDto {
  @IsOptional()
  @IsUUID(4, { message: 'UsuarioId deve ser um UUID' })
  usuarioId: string;

  @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
  @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Valor deve ser um número' })
  @IsOptional()
  @Min(0.1, { message: 'Preço deve ser maior que 0' })
  valor: number;

  @IsNumber(
    { maxDecimalPlaces: 0 },
    { message: 'Quantidade deve ser um número' },
  )
  @IsOptional()
  @Min(1, { message: 'Quantidade deve ser maior que 0' })
  quantidade: number;

  @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
  @IsOptional()
  descricao: string;

  @IsOptional()
  @MinLength(3, { message: 'Categoria deve ter no mínimo 3 caracteres' })
  @MaxLength(50, { message: 'Categoria deve ter no máximo 50 caracteres' })
  categoria: string;

  // caracteristicas: ProdutoCaracteristica;

  // imagens: ProdutoImagem;
}

// class ProdutoCaracteristica {
//   @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
//   @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
//   @IsNotEmpty({ message: 'Nome é obrigatório' })
//   nome: string;

//   @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
//   @IsNotEmpty({ message: 'Descrição é obrigatória' })
//   descricao: string;
// }

// class ProdutoImagem {
//   @IsNotEmpty({ message: 'URL é obrigatória' })
//   @IsUrl({}, { message: 'URL inválida' })
//   url: string;

//   @MaxLength(255, { message: 'Descrição deve ter no máximo 255 caracteres' })
//   @IsNotEmpty({ message: 'Descrição é obrigatória' })
//   descricao: string;
// }
